import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../../core/services/profile/user.service';
import {ProfileModel} from '../../../../../shared/models/ProfileModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data:ProfileModel;

  constructor(private userService:UserService) { }

  ngOnInit(): void {


    this.userService.getProfile().subscribe(value => {

      this.data=value;


    })

  }

}
