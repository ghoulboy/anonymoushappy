import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cs: CatService,
  ) { }

  ngOnInit() {
  }

  cats() {
    this.cs.getAllCats().subscribe()
  }
  catss() {
    this.cs.deleteCat("hyua").subscribe()
  }
  catsss() {
    this.cs.getCat("mary").subscribe()
  }
  catssss() {
    this.cs.getHW().subscribe()
  }

}
