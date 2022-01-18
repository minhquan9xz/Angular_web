import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { notification } from 'src/app/models/notification';
@Injectable()
export class MessagingService {
currentMessage = new BehaviorSubject(null);
constructor(private angularFireMessaging: AngularFireMessaging, private http: HttpClient) {
this.angularFireMessaging.messages.subscribe(
(_messaging:any) => {
_messaging.onMessage = _messaging.onMessage.bind(_messaging);
_messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
}
)
this.angularFireMessaging.messages.subscribe(res=>{
    console.log(res);
})
}
requestPermission() {
this.angularFireMessaging.requestToken.subscribe(
(token) => {
console.log('token', token);
},
(err) => {
console.error('Unable to get permission to notify.', err);
}
);
}
receiveMessage() {
this.angularFireMessaging.messages.subscribe(
(payload:any) => {
console.log("new message received. ", payload);
this.currentMessage.next(payload);
this.showCustomNotification(payload)
})
}
showCustomNotification(payload:any){
    let notify_data = payload['notification'];
    let title = notify_data['title'];
    let options={
        body:notify_data['data'],
        icon: "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/s960x960/61610708_448379465974540_7086545048824709120_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=YoEIEsiyoRwAX-G7PP9&_nc_ht=scontent.fhan5-6.fna&oh=01c44b6f0e958c30c9b82eb852bff78d&oe=61B1D653",
        badge:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/s960x960/61610708_448379465974540_7086545048824709120_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=YoEIEsiyoRwAX-G7PP9&_nc_ht=scontent.fhan5-6.fna&oh=01c44b6f0e958c30c9b82eb852bff78d&oe=61B1D653",
        image:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/s960x960/61610708_448379465974540_7086545048824709120_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=YoEIEsiyoRwAX-G7PP9&_nc_ht=scontent.fhan5-6.fna&oh=01c44b6f0e958c30c9b82eb852bff78d&oe=61B1D653",
    };
    console.log("message",notify_data);
    
    let notify:Notification = new Notification(title,options)
    notify.onclick = (event:any)=>{
    event.preventDefault();
    window.location.href='https://www.facebook.com/'
    }
}
show(notification:notification):Observable<any>{
    const headers = { 'Content-Type': 'application/json', 'Authorization':'key=AAAAzXeKgHk:APA91bGNboH-LsDJ5QklMwLifMMN2_-XVnKLxd6REQEhPne45nISzytM8ljJVUgivf0mtoY2hFCCkEaH65lTRpaAHqyNFpzSRP2Q7Q5Y6EzN_nqJmF2QVCPaAFkh5RAJhRSe50kQHiOy'}  
    const body=JSON.stringify({
        notification,
        to:"e5A_CLcdnneVDWu34ZB3Qy:APA91bHgJI8i1SWbYFSKpG5fqMILhCsnSXOULLXcXwbrlH_Yy29t46GIqchlg1yzL2CcIRql-eb7waW7uKvRC3GJZcOC5Oo9waVpwqE03zmvr4bpxHXiVzawrHD0C8GUUpZ0lBMlG3wb"
    });
    console.log(body)
    return this.http.post('https://fcm.googleapis.com/fcm/send', body,{'headers':headers})
}
}