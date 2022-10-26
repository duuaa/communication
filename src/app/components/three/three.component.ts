import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Info } from 'src/app/models/model';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  initialInfo!: Info;
  viewMode = false;
  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.initalizeInfo();
    this.communicationService.twoData.next(this.initialInfo.profile);
  }
  initalizeInfo() {
    this.initialInfo = {
      profile: {
        address: 'initial address',
        email: 'initial email',
      },
      user: {
        lastName: 'inital last name',
        firstName: 'inital first name',
      },
    };
    this.communicationService.oneData.next(this.initialInfo.user);
    this.communicationService.twoData.next(this.initialInfo.profile);
  }
  save() {
    this.communicationService.oneData.subscribe((user) => {
      this.initialInfo.user = user;
    });
    this.communicationService.twoData.subscribe((profile) => {
      this.initialInfo.profile = profile;
    });
    this.viewMode = true;
  }
}
