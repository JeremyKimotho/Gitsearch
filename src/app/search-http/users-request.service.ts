import { Injectable } from '@angular/core';
import { User } from '../users';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersRequestService {

  users: User

  constructor(private http:HttpClient) { }

  userRequest(){
    interface ApiResponse{
      name:string,
      bio:string,
      public_repos:number,
      followers:number,
      following:number,
      avatar_url:any,
      url:any,
      created_at:any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.users.name = response.name
        this.users.bio = response.bio
        this.users.public_repos = response.public_repos
        this.users.followers = response.followers
        this.users.following = response.following
        this.users.avatar_url = response.avatar_url
        this.users.url= response.url
        this.users.created_at = response.created_at
      })
    })
  }
}

// quoteRequest() {

//   interface ApiResponse {
//     quote: string;
//     author: string

//   }
//   let promise = new Promise((resolve, reject) => {
//     this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {

//       this.quote.quote = response.quote
//       this.quote.author = response.author

//       resolve()
//     },
//       error => {
//         this.quote.quote = "Never, never, never give up."
//         this.quote.author = "winston churchill"
//         reject(error)
//       }
//     )
//   })
//    this.users.length = 0
//   return promise
// }