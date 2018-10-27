import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { UsersRequestService } from '../search-http/users-request.service';
import { DaysSinceCreationPipe } from '.././days-since-creation.pipe';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User;

  search = '';

  constructor(public defaultRequester: UsersRequestService, public userRequester: UsersRequestService, public reposRequester: UsersRequestService) { }

  ngOnInit() {
    this.defaultRequester.default()
    this.users = this.defaultRequester.users
  }

  searchUser(search){
    this.search = search;
    this.userRequester.userSearch(search)
    this.users = this.userRequester.users
    this.search= ''
  }

  viewRepos(search){
    this.search = search;
    this.reposRequester.repoSearch(search)
  }

}
