import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConstantServiceService} from "../../services/constant-service.service";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
  isOpened = false;
  @Input()
  set isOpen(isOpen: boolean) {
    this.isOpened = isOpen;
  }
  get isOpen() {
    return this.isOpened;
  }
  @Output() isShowChange = new EventEmitter<boolean>();

  constructor(private service: ConstantServiceService,
              private router: Router,
  ) { }

  ngOnInit() {
  }

  closeLoginPopup(): void {
    this.isOpen = false;
  }

  submitOnEnter(inputElement, event) {
    if (event.keyCode == 13) { // No need to do browser specific checks. It is always 13.
      inputElement.form.submit();
      inputElement.form.reset();
    }
  }

  moveOnTab(inputElement, event) {
    if (event.keyCode == 9) { // No need to do browser specific checks. It is always 13.
      inputElement.next('input').focus();
    }
  }

    login() {
        this.service
            .authenticate({
                    username: this.loginForm.controls['username'].value,
                    password: this.loginForm.controls['password'].value
                }
                , () => {
                    console.log('logged in successfully');
                    this.router.navigate(['rant-list']);
                });
        return false;
    }

}
