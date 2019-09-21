import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  invalidCreds: boolean = false;
  constructor(private data: DataService, private shared: SharedService, private router: Router) { }

  ngOnInit() {
  }
  //validar usuario y pass
  validateCreds() {
    var allUsers = this.data.getAllUsers();
    var correctCreds = false;
    for (let i = 0; i < allUsers.length; i++) {
      let user = allUsers[i];


      if (user.email == this.email && user.password == this.password) {
        console.log("ya entrsate");
        correctCreds = true;
        this.invalidCreds = false;


        this.shared.setLoggedIn(true);
        this.shared.setLoggedUser(user);
        this.router.navigate(["user/register"]);


      }
    }
    if (!correctCreds) {
      this.invalidCreds = true;
      console.log("no se armo");
    }
  }
}
