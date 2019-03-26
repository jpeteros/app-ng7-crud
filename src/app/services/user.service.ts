import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/user.entity';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL : string = "http://localhost:3000/api/product/";

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<User[]>('http://localhost:3000/api/product/findAllUsers');
  }
}