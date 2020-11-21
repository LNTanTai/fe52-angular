import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isActive: boolean = true;
  isLogin: boolean = false;
  color: string = ""
  dssv: any[] = [
    {hoTen: "Teo", lop: "FE52"},
    {hoTen: "Van", lop: "FE53"},
    {hoTen: "Duy", lop: "FE54"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
