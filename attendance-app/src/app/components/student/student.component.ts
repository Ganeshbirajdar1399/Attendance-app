import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-student',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  studentForm: FormGroup;
  studentReg: FormGroup;
 authService = inject (AuthService);
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      stdusername: new FormControl('', [Validators.required, Validators.email]),
      stdpassword: new FormControl('', [Validators.required]),
    });

    this.studentReg = this.fb.group({
      stdusername: new FormControl('', [Validators.required, Validators.email]),
      stdpassword: new FormControl('', [Validators.required]),
      stdfname: new FormControl('', [Validators.required]),
      stdlname: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      this.authService.login(this.studentForm.value).subscribe({
        next:(response)=>{
          console.log('Login successful:', response);
        },
        error: (err) => {
          console.error('Login error:', err);
        },
      });
    }
     else {
      console.error('Form is invalid');
    }
  }
  onSignupSubmit() {
  
    if (this.studentReg.valid) {
      console.log(this.studentReg.value);
    }
  }
}
