import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() isLoading: boolean = true;

  // This method will simulate the asynchronous operation completion.
  // In a real scenario, you would use this method to handle the actual data loading or API call.
  loadData() {
    setTimeout(() => {
      this.isLoading = false; // Once the data is loaded, set isLoading to false to hide the loader.
    }, 700); // Simulating a 2-second data loading time.
  }

  ngOnInit() {
    this.loadData();
  }
}
