import {Component, OnInit} from '@angular/core';
import {IsinService} from "../isin.service";
import {ISIN} from "../models/isin.model";

@Component({
  selector: 'app-data',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elements: { [x: string]: ISIN; } = {};

  constructor(private isinService: IsinService) {
  }

  get isEmptyList() {
    return Object.keys(this.elements).length === 0;
  }

  get data(): string[] {
    return Object.keys(this.elements)
  }

  ngOnInit(): void {
    this.isinService.messages.subscribe((isinElement: ISIN) => {
      this.elements[isinElement.isin] = isinElement;
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
}
