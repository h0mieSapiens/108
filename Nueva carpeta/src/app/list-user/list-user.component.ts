import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
allUser: User[]=[];
  constructor(private data:DataService) { 
this.allUser = data.getAllUsers();
  }

  ngOnInit() {
  }

}
