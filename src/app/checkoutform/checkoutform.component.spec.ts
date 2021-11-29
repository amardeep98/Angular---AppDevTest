import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckoutformComponent } from './checkoutform.component';

describe('CheckoutformComponent', () => {
  let component: CheckoutformComponent;
  let fixture: ComponentFixture<CheckoutformComponent>;
  const formData = {
    firstname:"James",
    lastname:"Brian",
    email:"brian@gmail.com",
    password:"12345"
  };

  beforeEach(fakeAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutformComponent ],
      //importing FormsModule
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CheckoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create',  () => {
    expect(component).toBeTruthy();
    expect(component.submitted).toBe(false);
    component.onSubmit(formData);
    fixture.detectChanges();
    expect(component.submitted).toBe(true);
    const formHtml =fixture.nativeElement.querySelector(".container");
    expect(formHtml.hidden).toEqual(true);
    component.submitted = false;
    fixture.detectChanges();
    expect(formHtml.hidden).toEqual(false);
  });

  it('User input field', fakeAsync(() => {
    const email= fixture.nativeElement.querySelector("#exampleInputEmail1");
    email.value = 'I am Testing';
    //to say that we have performed an event on the input tag we have to make a dispatchEvent
    email.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    //to execute all the lines above before executing any line below call tick()
    tick();
    const message= fixture.nativeElement.querySelector("p");
    expect(message.textContent).toMatch("I am Testing");
  }));
});
