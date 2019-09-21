import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  model: User = new User;
  passRetype: string = '';
  passDontMatch: boolean = true;
  errorOnEmail: boolean = false;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  saveUser() {
    if (this.model.password != this.passRetype) {
      this.passDontMatch = true;
    }
    else if (this.model.email == ""|| !this.model.email.includes("@")) {
      this.errorOnEmail = true;
      console.log("no se armo");
    }
    else {
      this.passDontMatch = false;
      this.errorOnEmail=false;


      this.data.addUser(this.model);
      this.model = new User();
      this.passRetype = '';
    }
  }
}
