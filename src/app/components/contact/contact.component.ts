import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  private fb: FormBuilder = inject(FormBuilder);

   form!: FormGroup;



  ngOnInit(): void {
    this.initEmptyForm();
  }
   
  initEmptyForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(50)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }
}
