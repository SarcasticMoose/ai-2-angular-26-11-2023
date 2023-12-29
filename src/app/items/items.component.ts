import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {ItemsList} from "../items-list";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  totalELements? : number;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  this.dataService.items().subscribe(item => {
    this.totalELements = item.totalElements
  });
  }

}
