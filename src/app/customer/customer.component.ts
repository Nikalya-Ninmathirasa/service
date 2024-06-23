import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users:any;
  constructor(SE:UserService){
       this.users= SE.getData();
  }

  ngOnInit(): void {
  }

}
