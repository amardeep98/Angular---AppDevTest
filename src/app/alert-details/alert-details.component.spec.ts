import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct: Product =
  {
    id: 3,
    name: 'Devops',
    price: 799,
    quantity: 0,
    status: '4 left',
    description: "This course help us to understand automation testing",
    imgaddress : "https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg"
  };
  const stubProduct2: Product =
  {
    id: 3,
    name: 'Devops',
    price: 399,
    quantity: 2,
    status: '4 left',
    description: "This course help us to understand automation testing",
    imgaddress : "https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stubProduct;           //feeding the product as a mock
    fixture.detectChanges();
  });

  it('Verify discount logic in HTML', () => {
    expect(component).toBeTruthy();
    const element:HTMLElement = fixture.nativeElement;
    const para = element.querySelector("p");
    //test fails for price <699
    expect(para.textContent).toEqual("This course is available for a discount.");
  });

  it('Verify Availablity logic', () => {
    expect(component).toBeTruthy();
    const element:HTMLElement = fixture.nativeElement;
    const para = element.querySelectorAll("p");
    //if price>699 and quantity=0
    expect(para.length).toEqual(2);
    component.product = stubProduct2;
    fixture.detectChanges();
    const element2:HTMLElement = fixture.nativeElement;
    const para2 = element2.querySelectorAll("p");
    //if price<=699 and quantity>0
    expect(para2.length).toEqual(0);
  });

  it('verify Product Emit', () => {
    component.product = stubProduct;        //pass dummy product to the variable product in .ts file
    fixture.detectChanges();
    let selectedProduct : Product;
    component.notify.subscribe((product)=>selectedProduct = product);   //catch the product on notify event
    component.clickChildMe();
    expect(selectedProduct).toEqual(stubProduct);       //compare if the same product is emitted or not
    //expect(selectedProduct).toEqual(stubProduct2);      //this will fail because it won't emit stubproduct2
  });
});
