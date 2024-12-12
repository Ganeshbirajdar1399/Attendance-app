import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
 adminform: FormGroup;
  adminReg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adminform = this.fb.group({
      adminusername: new FormControl('', [Validators.required, Validators.email]),
      adminpassword: new FormControl('', [Validators.required]),
    });

    this.adminReg = this.fb.group({
      adminusername: new FormControl('', [Validators.required, Validators.email]),
      adminpassword: new FormControl('', [Validators.required]),
      adminfname: new FormControl('', [Validators.required]),
      adminlname: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    if (this.adminform.valid) {
      console.log(this.adminform.value);
    }
  }

  onSignupSubmit() {

    if (this.adminReg.valid) {
      console.log(this.adminReg.value);
    }
  }
}
