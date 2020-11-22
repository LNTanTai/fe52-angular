import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
  // @Input() movieAdded: any

  movieList: any[] = [
    {id: 1, name: "Batman", price: 900000, image: 'assets/image/feature.jpg'},
    {id: 2, name: "Dark Vader", price: 1000000, image: 'assets/image/star-wars-darth-vader-wallpaper-red-movies.jpg'},
    {id: 3, name: "Ironman", price: 800000, image: 'assets/image/39726.jpg'},
    {id: 4, name: "Venom", price: 700000, image: 'assets/image/venom-cuong-phim-1.jpg'},
    {id: 5, name: "God of War", price: 1200000, image: 'assets/image/review-god-of-war-manh-me-sau-sac-va-khong-the-quen-duoc.jpg'},
    {id: 6, name: "Ghost Rider", price: 600000, image: 'assets/image/ghost-rider-ma-toc-do.jpg'},
    {id: 7, name: "Ghost of Tsushima", price: 500000, image: 'assets/image/2b912b98-66af-4f44-95fd-0c6635ba7b19_Got_main.jpg'},
    {id: 8, name: "Dishonored", price: 400000, image: 'assets/image/tải xuống.jpg'},
    {id: 9, name: "Sekiro", price: 2000000, image: 'assets/image/thumb-1920-1033674.jpg'},
  ];
  
  constructor() { }

  // Lifecycle hook: theo dõi sự thay đổi của Input
  ngOnChanges(changes: any){
    // console.log(changes)
    // const {movieAdded} = changes;
    // // cần kiểm tra previousValue và currentValue để tránh trường hợp 1 giá trị Input khác thay đổi sẽ chạy lệnh movieList.push
    // if(movieAdded?.previousValue !== movieAdded?.currentValue){
    //   this.movieList.push(changes.movieAdded.currentValue)
    // }
  }

  ngOnInit(): void {
  }

  handleDeleteMovie(movieId: number){
    this.movieList = this.movieList.filter(movie => {
      return movie.id !== movieId;
    })
  }

}
