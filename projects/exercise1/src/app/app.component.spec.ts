import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

/* This is the setup for the test. */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

/* This is a test that checks if the app is created. */
  it('Exercise 1 - Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

/* This is a test that checks if the form is invalid, using productName */
  it('Exercise 1 - Invalid form from productName', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    productName.setValue("example");
    expect(app.form.invalid).toBeTrue();
  });

/* This is a test that checks if the form is invalid, using price */
  it('Exercise 1 - Invalid form from price', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const price = app.form.controls['price'];
    price.setValue("6");
    expect(app.form.invalid).toBeTrue();
  });

/* Checking if the form is valid. */
  it('Exercise 1 - Valid form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    const price = app.form.controls['price'];
    productName.setValue("example");
    price.setValue("6");
    expect(app.form.invalid).toBeFalse();
  });

/* This is a test that checks if the form is invalid, using price. */
  it('Exercise 1 - The price must be a number greater than 5 and less than 20', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    const price = app.form.controls['price'];
    productName.setValue("example");
    price.setValue("4");
    expect(app.form.valid).toBeFalse();
    productName.setValue("example");
    price.setValue("21");
    expect(app.form.valid).toBeFalse();
  });


/* This is a test that checks if the form is invalid, using productName. */
  it('Exercise 1 - The product name must be a string longer than 5 characters and smaller than 20', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    const price = app.form.controls['price'];
    productName.setValue("test");
    price.setValue("6");
    expect(app.form.valid).toBeFalse();
    productName.setValue("this is a test of angular");
    price.setValue("19");
    expect(app.form.valid).toBeFalse();
  });


/* This is a test that checks if the form is valid, using productName and price. */
  it('Exercise 1 - After submitting the form, if the form is valid show a success message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    const price = app.form.controls['price'];
    productName.setValue("example");
    price.setValue("6");
    const btnElement = fixture.debugElement.query(By.css('button.btn-primary'));
    btnElement.nativeElement.click();
    const testData = true;
    expect(app.validated).toEqual(testData)
  });


/* This is a test that checks if the form is invalid, using price. */
  it('Exercise 1 - After submitting the form, if the form is invalid show the validation errors', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    const price = app.form.controls['price'];
    productName.setValue("example");
    price.setValue("4");
    const btnElement = fixture.debugElement.query(By.css('button.btn-primary'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    const palert = fixture.debugElement.query(By.css('.alert'));
    expect(palert).not.toBeFalsy();
  });


/* This is a test that checks if the form is valid, using productName and price. */
  it('Exercise 1 - Hide the messages after the form reset', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const productName = app.form.controls['productName'];
    const price = app.form.controls['price'];
    productName.setValue("example");
    price.setValue("6");
    const btnElement = fixture.debugElement.query(By.css('button.btn-warning'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    const palert = fixture.debugElement.query(By.css('.alert'));
    expect(palert).toBeFalsy();
  });


});
