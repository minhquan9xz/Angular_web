import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  signInForm!: FormGroup;
  constructor(private fb:FormBuilder,private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z]{6,32}$/),
        ]),
      ],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ]),
      ],
    });
  }
  stylePassword(){
    this.hide =!this.hide;
  }
  onSubmit(){
    console.log('register',this.signInForm.value);
    this.auth.register(this.signInForm.value).subscribe(()=>this.router.navigate(['']))
  }

}
