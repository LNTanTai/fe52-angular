import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dang-chon',
  templateUrl: './danh-sach-dang-chon.component.html',
  styleUrls: ['./danh-sach-dang-chon.component.scss']
})
export class DanhSachDangChonComponent implements OnInit {
  @Output() onRemove = new EventEmitter()
  selectedList: any[] = []
  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(seat: any){
    // Kiểm tra iSelect đang là true hay false
    // true: thêm vào mảng selectedList
    // false: xóa khỏi mảng selectedList
    if(seat.isSelect){
      this.selectedList.push(seat)
    }
    else{
      const index = this.selectedList.findIndex(
        (item) => item.id === seat.id
      );
      this.selectedList.splice(index, 1)
    }
  }

  handleRemove(seat: any){
    // remove ghe khoi selectedList
    const index = this.selectedList.findIndex(
      (item) => item.id === seat.id
    );
    this.selectedList.splice(index, 1)

    // Phai set trang thai isSelect cua ghe vua remove thanh false => 
    //phai truyen ghe muon remove len component baitap8
    this.onRemove.emit(seat.id)
  }
}
