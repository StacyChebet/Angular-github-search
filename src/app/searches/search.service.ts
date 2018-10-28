import { Injectable } from '@angular/core';
import {resolve} from 'url';
import {reject} from 'q';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';
import {Repositories} from '../repositories';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: User;
  repositories: Repositories;
  newRepository: any;
  searchRepository: any;
  myApi = '5080a5f8087cd53eb0e586f73850a291641aac54';
  userError: boolean;

  constructor(private http: HttpClient) {
    this.users = new User ('', 0,  new Date(), 0, 0);
    this.repositories = new Repositories ('', '', new Date());
    this.userError = false;
  }

  githubUser(findName) {
    interface ApiResponse {
     username: string;
     repositories: number;
     date_created: Date;
     followers: number;
     following: number;
    }
    const myPromise = new Promise (resolve, reject); =>){
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>('http://api,github.com/users/' + findName + '?access_token=' + this.myApi).toPromise().then(getRepoResponse => {
        this.newRepository = getRepositoryResponse;
        resolve();
     }, error => {
       reject(error);
     });
    })
    return myPromise;
  }

  githubRepository(findName, toShow) {
    interface ApiResponse {
      items: any;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + '&per_page=' + toShow + '&sort=forks&order=asc?access_token=' + this.myApi).toPromise().then(getRepoResponse => {
        this.searchRepository = getRepoResponse.items;
        resolve();
      }, error => {
        this.searchRepository = 'error';
        reject(error);
      });
    });
    return promise;
  }
}





}
