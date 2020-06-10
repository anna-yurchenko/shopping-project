import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.shoppingItems.subscribe(res => {
      this.items = res
    })
  }

}
