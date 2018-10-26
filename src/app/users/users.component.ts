import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { UsersRequestService } from '../search-http/users-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User

  constructor(public usersRequester: UsersRequestService) { }

  ngOnInit() {
    this.usersRequester.userRequest()
    this.users = this.usersRequester.users
  }

}
