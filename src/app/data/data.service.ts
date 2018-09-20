import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Item } from './items';

@Injectable()
export class DataService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemdoc: AngularFirestoreDocument<Item>;


  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
  deleteItem(item: Item) {
    this.itemdoc = this.afs.doc(`items/${item.id}`);
    this.itemdoc.delete();
  }

  updateItem(item: Item) {
    this.itemdoc = this.afs.doc(`items/${item.id}`);
    this.itemdoc.update(item);
  }
}
