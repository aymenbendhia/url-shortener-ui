import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  urlInput = '';
  result = '';
  resultColor = 'green';

  constructor(private apiService:ApiService) {}
 
  ngOnInit() {
  }
 
 
  shortenUrl() {
    if (!this.urlInput) {
      this.result = 'Error: Please provide an URL to shorten';
      this.resultColor = 'red';
      return;
    }
    this.apiService.shortenUrl(this.urlInput)
      .subscribe(data => {
        this.result = 'Shortened URL: ' + data;
        this.resultColor = 'green';
      },
      error => {
        this.result = 'Error: ' + error.error;
        this.resultColor = 'red';
      }
      )      
  }
 
  getOriginalUrl() {
    if (!this.urlInput) {
      this.result = 'Error: Please provide an URL to shorten';
      this.resultColor = 'red';
      return;
    }
    this.apiService.getOriginalUrl(this.urlInput)
      .subscribe(data => {
        this.result = 'Original URL: ' + data;
        this.resultColor = 'green';
      },
      error => {
        this.result = 'Error: ' + error.error;
        this.resultColor = 'red';
      }
      )      
  }


}