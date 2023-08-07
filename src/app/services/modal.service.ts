import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  Type,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface ModalComponent {
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<ComponentRef<any>>();
  private closeModalSubject = new Subject<any>();
  private currentModal: ComponentRef<any> | undefined;
  private modalOpen$ = new BehaviorSubject<boolean>(false);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  openModal<T extends ModalComponent>(
    component: Type<T>,
    data?: any
  ): Observable<any> {
    const componentRef = this.createComponent(
      component,
      data
    ) as ComponentRef<ModalComponent> as ComponentRef<T>;
    this.currentModal = componentRef;
    this.modalSubject.next(componentRef);
    this.modalOpen$.next(true); // Notify that the modal is open
    return this.afterClosed();
  }

  private createComponent<T extends ModalComponent>(
    component: Type<T>,
    data: any
  ): ComponentRef<T> {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(
      this.injector
    ) as ComponentRef<T>;
    componentRef.instance.data = data;
    this.appRef.attachView(componentRef.hostView);

    return componentRef;
  }

  closeModal(result?: any) {
    if (this.currentModal) {
      this.appRef.detachView(this.currentModal.hostView); // Detach the modal component from the view
      this.currentModal.destroy(); // Destroy the modal component
      this.currentModal = undefined; // Clear the current modal reference
    }

    this.closeModalSubject.next(result || null); // Emit a value to the subject
    this.closeModalSubject.complete();
    this.modalOpen$.next(false); // Notify that the modal is closed
  }

  afterClosed(): Observable<any> {
    return this.closeModalSubject.asObservable();
  }

  isModalOpen(): Observable<boolean> {
    return this.modalOpen$.asObservable();
  }
}
