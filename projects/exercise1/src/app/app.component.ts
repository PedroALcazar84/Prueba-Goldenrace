import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


/* The AppComponent class is the root component of the application */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
/* Creating a new form group with two controls. */
  form: FormGroup = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
  });

  title: string = 'Exercise 1';
  submitted: boolean = false;
  validated: boolean = false;

  constructor(private fb: FormBuilder) { }

/**
 * The function creates a form group with two form controls, productName and price. 
 * 
 * The productName form control has three validators: required, minLength, and maxLength. 
 * 
 * The price form control has four validators: required, pattern, min, and max. 
 * 
 * The pattern validator uses a regular expression to validate the price. 
 * 
 * The regular expression allows only numbers. 
 * 
 * The min and max validators ensure that the price is between 6 and 19.
 */
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        productName: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(19)
        ]],
        price: ['', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(6),
          Validators.max(19)
        ]],
      }
    );
  }

/**
 * It returns the form's controls as a map of key-value pairs
 * @returns The form controls.
 */
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

/**
 * If the form is valid, disable the form controls and set the validated flag to true
 * @returns The form is being returned.
 */
  onSubmit(): void {
    this.submitted = true;
    this.validated = false;

    if (this.form.invalid) {
      return;
    }


    if (this.form.valid) {
      this.validated = true;
      this.form.controls['productName'].disable();
      this.form.controls['price'].disable();
      this.form.controls['submit'].disable();
    }
  }

/**
 * The function resets the form, sets the submitted and validated flags to false, and enables the productName and price form controls
 */
  onReset(): void {
    this.submitted = false;
    this.validated = false;
    this.form.controls['productName'].enable();
    this.form.controls['price'].enable();
    this.form.reset();
  }
}
