import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectTypes } from 'src/app/interface';
import { ModalService } from 'src/app/providers/modal/Modal.service';
import { ModalCloseService } from 'src/app/providers/modal/ModalClose.service';

@Component({
  selector: 'app-modalProject',
  templateUrl: './modalProject.component.html',
  styleUrls: ['./modalProject.component.scss'],
})
export class ModalProjectComponent implements OnInit {
  @Input() data: ProjectTypes;
  @Output() save: EventEmitter<ProjectTypes> = new EventEmitter<ProjectTypes>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _route: ActivatedRoute,
    private _modalService: ModalService,
    private _modalCloseService: ModalCloseService,
    private _router: Router
  ) {
    this.data = this._route.snapshot.data['data']; // Retrieve the resolved project
  }

  ngOnInit() {
    if (!this._modalService.isModalOpen()) {
      this._modalService.openModal(ModalProjectComponent, {
        data: this.data,
      });
    }
    this._modalService.afterClosed().subscribe(() => {
      this._router.navigate(['../'], { relativeTo: this._route });
    });
  }

  ngAfterViewInit() {}

  closeModal() {
    this._modalService.closeModal();
  }

  saveChanges() {
    // Emit the updated project to save changes
    this.save.emit(this.data);
  }

  cancelEdit() {
    // Emit cancel event to close the modal
    this.cancel.emit();
  }
}
