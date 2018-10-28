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





}
