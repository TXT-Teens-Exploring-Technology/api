import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api';
  data;


  constructor(public http: HttpClient){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9bbfaccfac0f45cd13f1ba17e3cfaec7')
    .subscribe((payload) => {
      this.data = payload;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    })
  }
}
