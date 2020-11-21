import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isActive: boolean = true;
  isLogin: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
