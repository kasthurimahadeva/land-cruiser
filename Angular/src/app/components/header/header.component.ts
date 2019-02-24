import {Component, Input, OnInit} from '@angular/core';
import {ConstantServiceService} from "../../services/constant-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn:boolean;
  userName: String;
  isOpen = false;
  constructor(private service: ConstantServiceService) {
      this.setUserName();
  }

  ngOnInit() {
      this.setUserName();
  }

  openLoginPopup() {
    this.isOpen = true;
  }

  setUserName() {
      if(localStorage.getItem('authenticated')) {
          this.isLoggedIn = true;
          this.userName = this.service.getLoggedInUserName();
      }
  }

}
