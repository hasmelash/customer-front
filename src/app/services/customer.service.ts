import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api: string = "http://localhost:8081/customer";

  constructor(private httpClient: HttpClient) { }

  public getAllCustomers(): Observable<any> {
    return this.httpClient.get(this.api + "/getall");
  }

  public getMaskedContactById(id): Observable<any> {
    return this.httpClient.get(this.api + "/getmaskedcontact/" + id)
  }

  public updateConstact(id:number,email:string, phone:string ) {
    return this.httpClient.post(this.api + "/addcustomercontact/" + id, {email: email, phone: phone});
  }
}
