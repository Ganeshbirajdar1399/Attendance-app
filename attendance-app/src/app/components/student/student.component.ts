import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-student',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  studentForm: FormGroup;
  studentReg: FormGroup;

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
    }
   }
  onSignupSubmit() {
  
    if (this.studentReg.valid) {
      console.log(this.studentReg.value);
    }
  }
}
