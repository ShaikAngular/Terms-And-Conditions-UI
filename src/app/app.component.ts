import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TermsConditions';
  summary;

  constructor(private service:ApiService){}

  ngOnInit(): void {
    this.service.getSummary().subscribe(response=>
      {
        console.log("response-->", response);
        console.log("response-->", response[0].summary);
        this.summary = response[0].summary;
      })
  }
  


}
