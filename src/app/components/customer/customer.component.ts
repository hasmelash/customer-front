import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/Customer.model";



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  shouldNotBeMasked: boolean = true;
  updateClicked: boolean = true;
  customers: Customer[];
  maskedCustomer: Customer;
  updatedEmail: string;
  updatedPhone: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data.customers;
    });
  }

  onMaskSelection(event, id: number) {
    this.customerService.getMaskedContactById(id).subscribe(
      data=>this.maskedCustomer = data.customer,
      (error)=>console.log(error),
      ()=>this.customers.find(data=>data.id==this.maskedCustomer.id).masked=event.checked
    );
  }

  onUpdateClick(id: number) {
    this.updateClicked = false;
    this.customers.find(customer=>customer.id==id).updateClicked = true;
  }

  onEmailChange(event) {
    this.updatedEmail = event.target.value;
  }
  onPhoneChange(event) {
    this.updatedPhone = event.target.value;
  }

  onUpdate(id) {
    (this.updatedEmail == null) ? this.updatedEmail = this.customers.find(cust=>cust.id==id).contact.email : this.updatedEmail;
    (this.updatedPhone == null) ? this.updatedPhone = this.customers.find(cust => cust.id == id).contact.phone : this.updatedPhone;

    this.customerService.updateConstact(id, this.updatedEmail, this.updatedPhone).subscribe(data=>{
      this.customers.forEach(customer=>{
        if(customer.id == id) {
          customer.contact.email = this.updatedEmail;
          customer.contact.phone = this.updatedPhone;
          customer.updateClicked = false;
        }
      })
    })
  }


}
