import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('manikanta@gmail.com', Validators.required),
      password: new FormControl('pass5678', Validators.required)
    });
    localStorage.setItem('token', 'pass1234');

  }
  loginForm!: FormGroup;
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        localStorage.setItem("token", data.token)
        this.router.navigate(['/devices']);
      }
    })
    console.log(this.loginForm.value);
    console.log(localStorage.getItem('token'));
  }
}
