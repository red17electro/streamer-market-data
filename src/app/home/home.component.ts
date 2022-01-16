import {Component, OnInit} from '@angular/core';
import {IsinService} from "../isin.service";
import {Observable} from "rxjs";
import {ISIN} from "../models/isin.model";

@Component({
  selector: 'app-data',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elements: { [x: string]: ISIN; } = {};
  liveData$: Observable<any> | undefined;

  constructor(private isinService: IsinService) {
  }

  get isEmptyList() {
    return Object.keys(this.elements).length === 0;
  }

  get data(): string[] {
    return Object.keys(this.elements)
  }

  ngOnInit(): void {
    this.liveData$ = this.isinService.webSocket;
    this.liveData$.subscribe((isinElement: ISIN) => {
      this.elements[isinElement.isin] = isinElement;
    });
  }

  subscribeToISIN(isinValue: string) {
    this.isinService.sendMessage({"subscribe": isinValue});
  }

  unsubscribeFromISIN(isinValue: string) {
    this.isinService.sendMessage({"unsubscribe": isinValue});
  }
}
