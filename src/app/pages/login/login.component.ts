import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  hide = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }
  stylePassword() {
    this.hide = !this.hide;
  }
  onSubmit() {
    console.log('aaaaaaaaaaaaa', this.signInForm.value);
    this.auth.login(this.signInForm.value).subscribe((res: any) => {
      console.log('tokennnnn', res);
      console.log('usernameeeee', res.result.username);
      localStorage.setItem('username', res.result.username);

      localStorage.setItem('token', res.result.token);
      if (res) {
        this.router.navigate(['home']);
      }
    });
  }
}
