import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[] = [];

  constructor() {

    var user= new User();
    user.email="admin@gmail.com";
    user.password="qwerty";
    user.firstName="admin";
    user.lastName="usr";

    this.userList.push(user);
   }
  public addUser(userVal: User) {
    this.userList.push(userVal);

  }
  public getAllUsers() {
    return this.userList;
  }
}
