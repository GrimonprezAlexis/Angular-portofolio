import { Injectable } from '@angular/core';
import { ModalService } from './Modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalCloseService {
  private destroy$ = new Subject<void>();

  constructor(
    private _modalService: ModalService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  subscribeToModalClose(): void {
    this._modalService.afterClosed().subscribe(() => {
      this._router.navigate(['../'], { relativeTo: this._route });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
