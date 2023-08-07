import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ProjectTypes } from 'src/app/interface';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-portfolio',
  templateUrl: './modal-edit-portfolio.component.html',
  styleUrls: ['./modal-edit-portfolio.component.scss'],
})
export class ModalEditPortfolioComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalEditPortfolioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService: ModalService
  ) {}

  isModalOpen = false;

  ngOnInit() {
    console.log('modal', this.data);
  }

  onImageChange(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files?.length) {
      this.data.image = fileInput.files[0];
    }
  }

  parseIcons(value: string) {
    this.data.icons = value.split(',').map((icon) => icon.trim());
  }

  parseCategories(value: string) {
    this.data.categories = value.split(',').map((category) => category.trim());
  }

  onClose() {
    this.dialogRef.close(null);
  }

  onSave() {
    this.dialogRef.close('test');

    // this.modalSaved.emit({
    //   title: this.data.title,
    //   description: this.data.description,
    //   image: this.data.image,
    //   link: this.data.link,
    //   icons: this.data.icons,
    //   categories: this.data.categories,
    // });
  }
}
