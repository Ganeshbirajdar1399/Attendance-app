import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
 teacherForm: FormGroup;
  teacherReg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      tusername: new FormControl('', [Validators.required, Validators.email]),
      tpassword: new FormControl('', [Validators.required]),
    });

    this.teacherReg = this.fb.group({
      tusername: new FormControl('', [Validators.required, Validators.email]),
      tpassword: new FormControl('', [Validators.required]),
      tfname: new FormControl('', [Validators.required]),
      tlname: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    if (this.teacherForm.valid) {
      console.log(this.teacherForm.value);
    }
  }

  onSignupSubmit() {
    if (this.teacherReg.valid) {
      console.log(this.teacherReg.value);
    }
  }
}
