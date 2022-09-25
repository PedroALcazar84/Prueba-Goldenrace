import { discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { delay, of, take } from 'rxjs';
import { By } from '@angular/platform-browser';


/* Setting up the test environment. */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });


  /* This is a test that checks if the app is created. */
  it('Exercise 3 - Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  /* This is a test that checks if the observable returns a numeric value. */
  it('Exercise 3 - Should return value numeric from observable', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = fixture.debugElement.injector.get(DataService);
    service.getNumbers().pipe(take(100)).subscribe((value: any) => {
      expect(value).toMatch(/\d{1,}/);
    });
    tick(1000);
    discardPeriodicTasks();
  }));


/* Checking if the last number published by the service is a number. */
  it('Exercise 3 - Should return the last number published by the service', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.number;
    tick(1000);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('p.number')).nativeElement;
    discardPeriodicTasks();
    expect(element.innerHTML).toMatch(/\d{1,}/);
  }));


});

