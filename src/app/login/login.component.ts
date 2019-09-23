import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  login: string;
  password: string;

  ngOnInit() {
  }

  signin() {
    // this.http.post<any>("http://localhost:8080/login", { 
    //   login: this.login, 
    //   password: this.password 
    // }).subscribe(() => {

    //   this.router.navigateByUrl('/control');
    // });
    this.router.navigateByUrl('/control');
  }
}
