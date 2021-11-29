import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifying enableBuying method', () => {
    expect(component).toBeTruthy();
    expect(component.isUnchanged).toBe(true);    //before executing enablebuying
    component.enableBuying();
    expect(component.isUnchanged).toBe(false);   //after executing enableBuying
  });

  it('Verifying the title of product-details component', () => {
    const element:HTMLElement = fixture.nativeElement;    //grabs the entire HTML file
    const header = element.querySelector("h1");           //grabs the first h1 element and stores in header
    expect(header.textContent).toEqual("Product List");      //checks if the text of the header
  });
});
