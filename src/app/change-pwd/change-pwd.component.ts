import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  imageUrl : string = "assets/img/pilposepic.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
