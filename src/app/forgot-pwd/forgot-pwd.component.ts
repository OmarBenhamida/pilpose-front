import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  imageUrl : string = "assets/img/pilposepic.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
