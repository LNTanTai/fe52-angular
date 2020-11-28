import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() seat: any

  @Output() onSelect = new EventEmitter()

  // Quan ly trang thai cua ghe
  isSelect:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(){
    this.isSelect = !this.isSelect
    //cần truyền thêm biến isSelect, để xác định nên thêm vào hay xóa đi ghế này ở danh-sách-đang-chọn
    this.onSelect.emit({...this.seat, isSelect: this.isSelect})
  }

}


