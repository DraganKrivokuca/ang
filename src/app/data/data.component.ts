import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Item } from './items';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  items: Item[];
  item: Item = {
    title: '',
    description: ''
  };
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }
  deleteItem(event, item: Item) {
    this.clearState();
    this.dataService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.dataService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
