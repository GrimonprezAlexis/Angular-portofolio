import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectTypes } from 'src/app/interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit, AfterViewInit {
  @Input() data: ProjectTypes | undefined;
  @Input() isOpenModal: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _modalService: ModalService
  ) {
    this.data = this._route.snapshot.data['data']; // Retrieve the resolved project
  }

  ngOnInit() {
    if (!this._modalService.isModalOpen()) {
      this._modalService.openModal(ProjectModalComponent, {
        data: this.data,
      });
    }
  }

  ngAfterViewInit() {}

  closeModal() {
    this._modalService.closeModal();
  }
}
