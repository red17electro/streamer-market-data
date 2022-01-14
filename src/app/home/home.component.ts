import {Component, OnInit} from '@angular/core';
import {IsinService} from "../isin.service";
import {catchError, map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-data',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  liveData$: Observable<any> | undefined;

  constructor(private isinService: IsinService) {
  }

  ngOnInit(): void {
    this.liveData$ = this.isinService.webSocket;
    this.liveData$.subscribe();
  }

  sendButtonClick() {
    this.isinService.sendMessage({"subscribe": "DE000BASF111"});
  }

}
