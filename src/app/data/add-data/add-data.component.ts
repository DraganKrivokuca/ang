import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../items';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  item: Item = {
    title: '',
    description: ''
  };
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title !== '' && this.item.description !== '') {
        this.dataService.addItem(this.item);
        this.item.title = '';
        this.item.description = '';
    }
  }

}
