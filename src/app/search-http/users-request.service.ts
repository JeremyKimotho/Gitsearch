import { Injectable } from '@angular/core';
import { User } from '../users';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class UsersRequestService {

  users: User

  Repos: Repos[]=[];

  constructor(private http:HttpClient) { 
    this.users = new User('', '', 0, 0, 0, 0, 0, 0, 0)
  }

  default(){
    interface ApiResponse{
      login:string,
      bio:string,
      public_repos:number,
      followers:number,
      following:number,
      avatar_url:any,
      html_url:any,
      created_at:any
      repos_url:any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiDefaultUrl).toPromise().then(response => {
        this.users.login = response.login
        this.users.bio = response.bio
        this.users.public_repos = response.public_repos
        this.users.followers = response.followers
        this.users.following = response.following
        this.users.avatar_url = response.avatar_url
        this.users.html_url= response.html_url
        this.users.created_at = response.created_at
        this.users.repos_url = response.repos_url
        if (response.bio == null) {
          this.users.bio = 'Beast Mode Loading 💪🏾!'
        }
        resolve()
      },
      error => {
        reject(error)
      })
      return promise
    })
  }

  userSearch(searchItem:string) {
    interface ApiResponse {
      login: string,
      bio: string,
      public_repos: number,
      followers: number,
      following: number,
      avatar_url: any,
      html_url: any,
      created_at: any
      repos_url: any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiSearchUrl + searchItem + `?access_token=2b56f79b8a2380b18592138715fcc2578c964fde`).toPromise().then(response => {
        this.users.login = response.login
        this.users.bio = response.bio
        this.users.public_repos = response.public_repos
        this.users.followers = response.followers
        this.users.following = response.following
        this.users.avatar_url = response.avatar_url
        this.users.html_url = response.html_url
        this.users.created_at = response.created_at
        this.users.repos_url = response.repos_url
        if (response.bio==null){
          this.users.bio = `I'm in love with the co-ding! ✌🏾`
        }
        resolve()
      },
        error => {
          alert('That user does not exist')
          reject(error)
        })
      return promise
    })

  }

  repoSearch() {
    interface ApiResponse{
      name:any
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.users.repos_url).toPromise().then(response => {
        for(let i in response){
          console.log(response[i].name)
          this.Repos.push(response[i].name)
        }
        resolve()
      },
        error => {
          console.log('This user has no repos')
          reject(error)
        },
      )
      this.Repos.length=0
      return promise
    })
  }
}


