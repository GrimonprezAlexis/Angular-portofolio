import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new BehaviorSubject<any>(null);
  public modal$: Observable<any> = this.modalSubject.asObservable();
  private modalOpen$ = new BehaviorSubject<boolean>(false);
  private modalClosed$ = new Subject<{ key: string; data: any }>();

  private currentModalKeySubject = new BehaviorSubject<string | null>(null);
  public currentModalKey$ = this.currentModalKeySubject.asObservable();

  // Un objet pour garder une trace des modales ouvertes
  private openModals: { [key: string]: boolean } = {};
  private modalOrder: string[] = [];

  openModal(key: string, component: any, title?: string, data?: any) {
    this.currentModalKeySubject.next(key); // Mettez à jour la clé de la modal courante
    if (!this.modalOrder.includes(key)) {
      this.modalOrder.push(key);
    }
    this.modalSubject.next({ key, component, title, data });
    this.modalOpen$.next(true);
    this.openModals[key] = true; // Marquer la modal comme ouverte
  }

  closeModal(key: string, data: any) {
    this.modalSubject.next(null);
    this.modalClosed$.next({ key, data });
    this.modalOpen$.next(false);
    this.openModals[key] = false; // Marquer la modal comme fermée
    //this.modalOrder.pop();
  }

  getCurrentModalKey(): string | null {
    return this.currentModalKeySubject.value;
  }

  afterClosed(): Observable<any> {
    return this.modalClosed$.asObservable();
  }

  isModalOpen(key: string): Observable<boolean> {
    return this.modalOpen$
      .asObservable()
      .pipe(map(() => this.openModals[key] || false));
  }
}
