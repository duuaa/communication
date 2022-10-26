import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { Profile } from 'src/app/models/model';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.initializeProfileData();
    this.profileForm.valueChanges.subscribe((profile) => {
      this.communicationService.twoData.next({
        email: profile.email ? profile.email : '',
        address: profile.address ? profile.address : '',
      });
    });
  }
  initializeProfileData() {
    this.communicationService.twoData.pipe(first()).subscribe((profile: Profile) => {
      this.profileForm.setValue(profile);
    });
  }
}
