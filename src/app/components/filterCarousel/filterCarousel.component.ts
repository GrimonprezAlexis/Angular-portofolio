import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CategoryFilters } from 'src/app/interface';
import { DarkModeService } from 'src/app/services/darkmode/DarkMode.service';

@Component({
  selector: 'app-filter-carousel',
  templateUrl: './filterCarousel.component.html',
  styleUrls: ['./filterCarousel.component.scss'],
})
export class FilterCarouselComponent {
  @Input() currentCategory: string | undefined;
  @Output() newCurrentCategory: EventEmitter<string> = new EventEmitter();
  @ViewChild('categoryList', { static: false })
  categoryList!: ElementRef;

  categories: CategoryFilters[] = [
    {
      label: 'All',
      icon: 'fa fa-star',
      category: 'All',
    },
    {
      label: 'CSS',
      icon: 'fa fa-star',
      category: 'CSS',
    },
    {
      label: 'JS',
      icon: 'fa-brands fa-js',
      category: 'JS',
    },
    {
      label: 'React',
      icon: 'fa-brands fa-react',
      category: 'React',
    },
    {
      label: 'Angular',
      icon: 'fa-brands fa-angular',
      category: 'Angular',
    },
    {
      label: 'Sass',
      icon: 'fa-brands fa-sass',
      category: 'Sass',
    },
    {
      label: 'NodeJS',
      icon: 'fa-brands fa-node-js',
      category: 'NodeJS',
    },
    // { label: 'SHOW ALL', category: '', icon: '' },
    // { label: 'FRONT-END', category: '', icon: '' },
    // { label: 'BACK-END', category: '', icon: '' },
    // { label: 'HTML5', category: '', icon: '' },
    // { label: 'SASS', category: '', icon: '' },
    // { label: 'JAVASCRIPT', category: '', icon: '' },
    // { label: 'NODEJS', category: '', icon: '' },
    // { label: 'REACTJS', category: '', icon: '' },
    // { label: 'MONGODB', category: '', icon: '' },
    // { label: 'MYSQL', category: '', icon: '' },
    // { label: 'UI/UX DESIGN', category: '', icon: '' },
  ];

  constructor(
    public darkModeService: DarkModeService,
    private scroll: ViewportScroller
  ) {}

  setCurrentCategory(category: string) {
    this.newCurrentCategory.emit(category);
  }
}
