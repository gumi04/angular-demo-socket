import {EventEmitter, Injectable, Output} from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket{


  @Output() outEven: EventEmitter<any> = new EventEmitter();

  constructor() { 
    super({
      url: 'localhost:3000'
    })
    this.listen();
  }

  listen(): any {
    this.ioSocket.on('pub-notification', (res: string) => this.outEven.emit(res));  
    
  }
}
