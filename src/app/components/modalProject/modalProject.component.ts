import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectTypes } from 'src/app/interface';
import { ModalService } from 'src/app/providers/modal/Modal.service';
import { ModalCloseService } from 'src/app/providers/modal/ModalClose.service';

@Component({
  selector: 'app-modalProject',
  templateUrl: './modalProject.component.html',
  styleUrls: ['./modalProject.component.scss'],
})
export class ModalProjectComponent {
  modalData: any = {}; // Store component and title
  canCloseModal: boolean = false;
  canBackModal: boolean = false;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modalElement') modalElement!: ElementRef;

  constructor(
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.modalService.modal$.subscribe((data) => {
      this.modalData = data.data.project;
    });
  }

  closeModal() {
    const currentModalKey = this.modalService.getCurrentModalKey();
    if (currentModalKey) {
      const modalElement = this.modalElement.nativeElement;
      const dialogElement2 = modalElement.querySelector('.custom-modal-dialog');

      // Add closing classes to trigger animations
      modalElement.classList.add('closing');
      dialogElement2.classList.add('closing');
      this.modalService.closeModal(currentModalKey, null);
      this.changeDetectorRef.detectChanges();
    }
  }
}
