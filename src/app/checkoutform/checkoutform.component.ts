import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { Contact } from 'src/Contact';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {

  contact = new Contact();
  msg = "@gmail.com";
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.contact.firstName = form.firstname;
    this.contact.lastName = form.lastname;
    this.contact.email = form.email;
    this.contact.password = form.password;
    window.alert("Cart is succesfully submitted by "+this.contact.firstName);
    this.submitted = true;
  }
}
