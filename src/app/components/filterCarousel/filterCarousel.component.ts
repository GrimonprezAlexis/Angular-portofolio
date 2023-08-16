import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TechnologyWithIcons } from 'src/app/interface';
import { DarkModeService } from 'src/app/services/darkmode/DarkMode.service';
import { ProjectsService } from 'src/app/services/projects/Projects.service';

@Component({
  selector: 'app-filter-carousel',
  templateUrl: './filterCarousel.component.html',
  styleUrls: ['./filterCarousel.component.scss'],
})
export class FilterCarouselComponent implements OnInit {
  @Input() currentTechno: string | undefined;
  @Output() newCurrentTechno: EventEmitter<string> = new EventEmitter();
  @Input() technologiesWithIcons: TechnologyWithIcons[] = [];

  constructor(
    public darkModeService: DarkModeService,
    private _projectService: ProjectsService
  ) {}

  ngOnInit() {
    console.log(this.technologiesWithIcons);
  }

  setCurrentTechno(technologie: string) {
    this.newCurrentTechno.emit(technologie);
  }
}
