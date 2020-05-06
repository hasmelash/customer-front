import {Contact} from "./Contact.model";


export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  contact: Contact;
  masked: boolean = false;
  updateClicked: boolean = false;
}
