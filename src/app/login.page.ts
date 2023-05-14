import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}