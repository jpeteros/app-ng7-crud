import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;
  users1: Object;
  loading: boolean;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loading = true;
    this.homeService.getUsers().subscribe(data => {
        this.loading = false;
        this.users = data;
        console.log(this.users);
      }
    );
  }



}
