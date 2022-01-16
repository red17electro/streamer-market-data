import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from "rxjs/webSocket";

export const WS_ENDPOINT = 'ws://159.89.15.214:8080/';

export interface Error {
  code: number;
  reason: string;
}

@Injectable({
  providedIn: 'root'
})
export class IsinService {
  myWebSocket: WebSocketSubject<any> = webSocket({
    url: WS_ENDPOINT,
    openObserver: {
      next: () => {
        console.log('Connection is established!');
      }
    },
    closeObserver: {
      next: () => {
        const customError = {code: 6666, reason: "Custom evil reason"}
        console.log(`code: ${customError.code}, reason: ${customError.reason}`);
        this.error(customError);
      }
    }
  });

  get messages() {
    return this.myWebSocket.asObservable();
  }

  error(error: Error) {
    this.myWebSocket.error({code: error.code, reason: error.reason});
  }

  sendMessage(msg: any) {
    this.myWebSocket.next(msg);
  }

  close() {
    this.myWebSocket.complete();
  }
}
