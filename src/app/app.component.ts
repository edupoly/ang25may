import { Component,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  count = 0;
  inc(){
    this.count++;
  }

  count2 = signal(0)
  inc2(){
    this.count2.set(this.count2()+1)
    // this.count2.update((cnt)=>{return cnt+2})
  }

}
/*
  1. manage state
  2. communication between component( RxJS / signals)

*/