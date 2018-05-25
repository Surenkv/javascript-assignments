import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('0.5s', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})          
      ])
    ])

  ]
})
export class TodolistComponent implements OnInit {
  items = [];
  doneitems = [];
  editState:boolean=false;
  doneEditState:boolean=false;
  itemToEdit:string;
  doneItemtoEdit:string;
  onState:boolean=false;
newTask:string;
  constructor() {
    this.items = ['Buy Fresh juice', 'This is a new task','Wish Mom Happy birthday'];
    this.doneitems = ['Go to market', 'Do this by today'];
  }


  pushItem(newTask) {
    if (newTask) {
      this.items.unshift(newTask);
    }
 
  }

  removeItem(i) {
    this.items.splice(i,1);
  }

  removedoneItem(j) {
    this.doneitems.splice(j,1);
  }

  moveItem(k){
    var changeItem=this.items.splice(k,1);
    this.doneitems.unshift(changeItem);
  }
  moveDoneItem(l){
    var revertItem=this.doneitems.splice(l,1);
    this.items.push(revertItem);
  }

editItem(itemIndex,item){
  this.editState=true;
  this.onState=true;
  var e = document.getElementById(item);
  e.parentNode.removeChild(e);
  this.itemToEdit=itemIndex;

}

updateItem(updatedItem,i){
  this.onState=false;
this.items[i]=updatedItem+" ";
this.editState=false;
}

editdoneItem(doneItemIndex,doneItem){
  this.doneEditState=true;
  this.onState=true;
  var f = document.getElementById(doneItem);
  f.parentNode.removeChild(f);
  this.doneItemtoEdit=doneItemIndex;
}

updatedoneItem(updateddoneItem,j){
  this.onState=false;
this.doneitems[j]=updateddoneItem+" ";
this.doneEditState=false;
}

  ngOnInit() {

  }

}
