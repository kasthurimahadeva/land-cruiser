import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isOpened = false;
  @Input()
  set isOpen(isOpen: boolean) {
    this.isOpened = isOpen;
  }
  get isOpen() {
    return this.isOpened;
  }
  @Output() isShowChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeLoginPopup(): void {
    this.isOpen = false;
  }

  submitOnEnter(inputElement, event) {
    if (event.keyCode == 13) { // No need to do browser specific checks. It is always 13.
      inputElement.form.submit();
    }
  }

  moveOnTab(inputElement, event) {
    if (event.keyCode == 9) { // No need to do browser specific checks. It is always 13.
      inputElement.next('input').focus();
    }
  }

}
