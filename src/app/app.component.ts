import { Component } from '@angular/core';
import { MessagingService } from './Service/firebase/messaging.service';
import { notification } from './models/notification';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minh Quân';
  body ='Bạn có 1 thông báo mới'
  notification:notification[]=[];
  Notification = new notification(this.title,this.body);

  message:any;
  constructor(private messagingService: MessagingService) { }
  ngOnInit() {
   this.getShow();
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
   }
   getShow(){
     this.messagingService.show(this.Notification).subscribe((data:any)=>{
       console.log('Notification',data);
       this.notification = data;
       
     })
   }
  }
