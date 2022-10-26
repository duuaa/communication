import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile, User } from '../models/model';
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {

  oneData: BehaviorSubject<User> = new BehaviorSubject({
    lastName: "",
    firstName: ""
  });
  twoData: BehaviorSubject<Profile> = new BehaviorSubject({
    email:"",
    address: ""
  });
  constructor() {}
}
