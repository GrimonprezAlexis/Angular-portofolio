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
  private currentModal: ComponentRef<any> | undefined;
  private modalOpen$ = new BehaviorSubject<boolean>(false);
  private modalClosed$ = new Subject<void>(); // New subject to indicate modal closed

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
    return this.modalClosed$.asObservable();
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
      this.appRef.detachView(this.currentModal.hostView);
      this.currentModal.destroy();
      this.currentModal = undefined;
    }
    this.modalClosed$.next();
    this.modalOpen$.next(false);
  }

  afterClosed() {
    return this.modalClosed$.asObservable();
  }

  isModalOpen(): Observable<boolean> {
    return this.modalOpen$.asObservable();
  }
}
