import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  // khai báo Input để nhận dữ liệu từ component cha truyền xuống
  @Input() movie: any

  // EventEmitter: đối tượng giúp ta tụ định nghĩa 1 sự kiện
  // Output: đẩy sự kiện lên component cha
  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteMovie(){
    // cần truyền id của bộ phim muốn xóa lên component cha
    // emit: kích hoạt sự kiên và kềm theo dữ liệu muốn truyền đi 
    this.onDelete.emit(this.movie.id)
  }

}
