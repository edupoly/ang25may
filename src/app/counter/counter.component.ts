import { Component, signal,effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count=signal(0);
  count2=signal(100);
  constructor(){
    effect(()=>{
      console.log("count updated",this.count());
    })
    effect(()=>{
      console.log("count2 updated",this.count2());
    })
  }
  inc(){
    this.count.set(this.count()+1)
    // this.count.update((ov)=>{return ov+10})
  }
  inc2(){
    this.count2.set(this.count2()+10)
    // this.count.update((ov)=>{return ov+10})
  }
}
