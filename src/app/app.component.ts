import { Component, OnInit } from '@angular/core';
import { SocketWebService } from './service/socket-web.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'demo';
  data:any = []
  ngOnInit(): void {
    console.log("oninit")
  }

  constructor(
    private socketWebService: SocketWebService,
  ) {
    this.socketWebService.outEven.subscribe(res => {
      console.log(res);
      this.data.push(res);
    })
  }
}
