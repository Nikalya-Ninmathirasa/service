import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData(){
    return [
      {name:'Raam',email:'raam@gamil.com',address:'Jaffna'},
      {name:'Raj',email:'raj@gamil.com',address:'Jaffna'},
      {name:'Rahul',email:'rahul@gamil.com',address:'Jaffna'},
      {name:'Rajesh',email:'rajesh@gamil.com',address:'Jaffna'}
    ]
  }
}
