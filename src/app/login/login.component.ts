import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  authStatusSub: Subscription;

  constructor() { }

  onLogin(form: NgForm) {
    console.log(form.value)
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}