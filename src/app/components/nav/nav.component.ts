import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show = false;
  fullScreen = true;
  template = ``
  constructor() { }

  ngOnInit(): void {
  }
  isLoading(){
      this.show = true;
      this.fullScreen = true;
      this.template = ``
      setTimeout(() => {
          this.show = false
      }, 2000);
    
  }

}
