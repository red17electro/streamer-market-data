import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from "rxjs/webSocket";
import {ISIN} from "./models/isin.model";

export const WS_ENDPOINT = 'ws://159.89.15.214:8080/';

@Injectable({
  providedIn: 'root'
})
export class IsinService {
  myWebSocket: WebSocketSubject<any> = webSocket(WS_ENDPOINT);

  constructor() {
  }

  get webSocket() {
    return this.myWebSocket.asObservable();
  }

  sendMessage(msg: any) {
    this.myWebSocket.next(msg);
  }
}
