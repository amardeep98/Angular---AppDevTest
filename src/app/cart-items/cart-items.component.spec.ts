import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../cart.service';

import { CartItemsComponent } from './cart-items.component';
import { MockCartService } from './MockCartService';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;
  let cartService:CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsComponent ],
      //informing that a service 'Cartservice' is used and to mock that with the class 'MockCartService'
      //so instead of using CartService the spec file will use MockCartService
      providers: [{provide:CartService, useClass:MockCartService}]   
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    //injecting the CartService as done in constructor of .ts class
    cartService = TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifying the calculations', () => {
    expect(component).toBeTruthy();
    expect(component.subTotal).toBe(25);
    component.onKey(cartService.getProducts()[1], 3);
    fixture.detectChanges();
    expect(component.subTotal).toBe(45);
    const element:HTMLElement = fixture.nativeElement;
    expect(element.querySelector(".mint").textContent).toBe("₹65");
  });
});
