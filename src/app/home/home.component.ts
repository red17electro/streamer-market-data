import {Component, OnInit} from '@angular/core';
import {IsinService} from "../isin.service";
import {ISIN} from "../models/isin.model";

@Component({
  selector: 'app-data',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isinUpdates: { [x: string]: ISIN; } = {};

  constructor(private isinService: IsinService) {
  }

  get isEmptyList() {
    return Object.keys(this.isinUpdates).length === 0;
  }

  get keys(): string[] {
    return Object.keys(this.isinUpdates)
  }

  getFromLocalStorage() {
    const local = localStorage.getItem('isinUpdates');
    return local ? JSON.parse(local) : {};
  }

  localDataExists() {
    return !!localStorage.getItem('isinUpdates');
  }

  saveToLocalStorage() {
    localStorage.setItem('isinUpdates', JSON.stringify(this.isinUpdates));
  }

  removeFromLocalStorage(){
    localStorage.removeItem('isinUpdates');
  }

  ngOnInit(): void {
    this.isinUpdates = this.getFromLocalStorage();
    this.isinService.messages.subscribe((isinElement: ISIN) => {
      this.isinUpdates[isinElement.isin] = isinElement;
      this.saveToLocalStorage()
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete!');
    });
  }

  subscribeToISIN(isinValue: string) {
    this.isinService.sendMessage({"subscribe": isinValue});
  }

  unsubscribeFromISIN(isinValue: string) {
    this.isinService.sendMessage({"unsubscribe": isinValue});
  }

  clearLocalData() {
    this.removeFromLocalStorage();
    this.isinUpdates = {};
  }
}
