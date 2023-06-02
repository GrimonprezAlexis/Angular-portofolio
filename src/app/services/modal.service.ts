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
  private modalOpen$ = new BehaviorSubject<boolean>(false); // Add this line

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
    this.closeModalSubject.next(result);
    this.closeModalSubject.complete();
    if (this.currentModal) {
      this.modalSubject.next(this.currentModal); // Notify subscribers that the modal has been closed
    }
  }

  afterClosed(): Observable<any> {
    return this.closeModalSubject.asObservable();
  }

  // Add this method to expose the modalOpen$ subject
  isModalOpen(): Observable<boolean> {
    return this.modalOpen$.asObservable();
  }
}
