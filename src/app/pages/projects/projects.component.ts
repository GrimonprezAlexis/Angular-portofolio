import { PortfolioService } from './../../services/portfolio.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkModeService } from 'src/app/services/DarkMode.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectsData: any = [{}];
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('arrowLeft') arrowLeft!: ElementRef;
  @ViewChild('arrowRight') arrowRight!: ElementRef;

  constructor(
    private _portfolioService: PortfolioService,
    public darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this._portfolioService.getPortfolio().subscribe((data) => {
      this.projectsData = data;
      console.log(this.projectsData);
    });
  }

  currentIndex: number = 0;

  changeSlide(index: number): void {
    this.currentIndex = index;
  }

  getCardTransformLeft(index: number): string {
    if (index === this.currentIndex - 1) {
      return 'translateX(-40%) scale(0.8)';
    }
    if (index === this.currentIndex - 2) {
      return 'translateX(-60%) scale(0.8)';
    }
    if (index === this.currentIndex - 3) {
      return 'translateX(-80%) scale(0.8)';
    } else if (index === this.currentIndex) {
      return 'translateX(0) scale(1)';
    } else if (index === this.currentIndex + 1) {
      return 'translateX(40%) scale(0.8)';
    } else if (index === this.currentIndex + 2) {
      return 'translateX(60%) scale(0.8)';
    } else if (index === this.currentIndex + 3) {
      return 'translateX(80%) scale(0.8)';
    } else {
      return 'translateX(-200%)';
    }

    // if (
    //   index === this.currentIndex - 1 ||
    //   index === this.currentIndex - 2 ||
    //   index === this.currentIndex - 3
    // ) {
    //   return 'translateX(-40%) scale(0.8)';
    // } else if (index === this.currentIndex) {
    //   return 'translateX(0) scale(1)';
    // } else if (
    //   index === this.currentIndex + 1 ||
    //   index === this.currentIndex + 2 ||
    //   index === this.currentIndex + 3
    // ) {
    //   return 'translateX(40%) scale(0.8)';
    // } else {
    //   return 'translateX(-200%)';
    // }
  }

  getCardOpacityLeft(index: number): number {
    if (
      index === this.currentIndex - 1 ||
      index === this.currentIndex - 2 ||
      index === this.currentIndex - 3
    ) {
      return 0.4;
    } else if (index === this.currentIndex) {
      return 1;
    } else if (
      index === this.currentIndex + 1 ||
      index === this.currentIndex + 2 ||
      index === this.currentIndex + 3
    ) {
      return 0.4;
    } else {
      return 0;
    }
  }

  getCardZIndexLeft(index: number): number {
    if (
      index === this.currentIndex - 1 ||
      index === this.currentIndex - 2 ||
      index === this.currentIndex - 3
    ) {
      return 0;
    } else if (index === this.currentIndex) {
      return 1;
    } else if (
      index === this.currentIndex + 1 ||
      index === this.currentIndex + 2 ||
      index === this.currentIndex + 3
    ) {
      return 0;
    } else {
      return -1;
    }
  }
}
