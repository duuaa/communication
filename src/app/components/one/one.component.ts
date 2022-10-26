import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { User } from 'src/app/models/model';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.initializeUserData();
    this.watchDataChanges()
  }
  watchDataChanges() {
    this.userForm.valueChanges.subscribe(user => {
      this.communicationService.oneData.next({
        firstName: user.firstName ? user.firstName : '',
        lastName: user.lastName ? user.lastName : '',
      });
    });
  }
  initializeUserData() {
    this.communicationService.oneData.pipe(first()).subscribe((user: User) => {
      this.userForm.setValue(user);
    });
  }
}
