import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'



@Component({
  selector: 'app-online-control',
  templateUrl: './online-control.component.html',
  styleUrls: ['./online-control.component.scss']
})
export class OnlineControlComponent implements OnInit {
  id = "1";
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  status$ = of(false);
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.status$ = this.http.get<any>(`http://localhost:8080/status/${this.id}`);
  }

  trancar() {
    this.http.get<any>(`http://localhost:8080/lock/${this.id}`).subscribe(() => {
      this.status$ = of(true);
    });    
  }

  destrancar(){
    this.http.patch<any>(`http://localhost:8080/unlock/${this.id}`, null).subscribe(() => {
      this.status$ = of(false);
    });    
  }

  localizar() {
    this.http.get<any>(`http://localhost:8080/locate/${this.id}`).subscribe((key) => {
      this.lng = key.longitude;
      this.lat = key.latitude;
    });
  }
}
