import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { DanhSachDangChonComponent } from './danh-sach-dang-chon/danh-sach-dang-chon.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss']
})
export class Baitap8Component implements OnInit {
  @ViewChild('danhSachDangChon')
    danhSachDangChonComponent = new DanhSachDangChonComponent();
  constructor() { }
  @ViewChild('danhSachGhe')
    DanhSachGheComponent = new DanhSachGheComponent();
  ngOnInit(): void {
  }

  handleSelect(seat: any){
    // ViewChild tới danh-Sách-đang-chọn component và gội hàm handleSelect
    this.danhSachDangChonComponent.handleSelect(seat)
  }

  handleRemove(seatId: number){
    //ViewChild tới danh-sách-ghế component và gọi hàm handleRemove
    this.DanhSachGheComponent.hanldeRemove(seatId)
  }
}
