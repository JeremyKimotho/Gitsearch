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
      repos:number,
      followers:number,
      following:number,
      picture:any,
      link:any,
      dateOfCreation:any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.users.name = response.name
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