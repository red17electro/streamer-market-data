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

  get data(): string[] {
    return Object.keys(this.elements)
  }

  ngOnInit(): void {
    this.liveData$ = this.isinService.webSocket;
    this.liveData$.subscribe((isinElement: ISIN) => {
      this.elements[isinElement.isin] = isinElement;
    });
  }
}
