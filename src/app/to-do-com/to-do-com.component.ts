import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ToDoList } from './../to-do-list';
@Component({
  selector: 'app-to-do-com',
  templateUrl: './to-do-com.component.html',
  styleUrls: ['./to-do-com.component.css'],
})
export class ToDoComComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    const all = document.getElementById('all');
    all?.setAttribute('class', 'Mp1 selectbut');
  }

  TDList: ToDoList[] = [
    {
      text: 'Complete online JavaScript course',
      hover: false,
      completed: true,
    },
    {
      text: 'Jog around the park 3x',
      hover: false,
      completed: false,
    },
    {
      text: '10 minutes meditation',
      hover: false,
      completed: false,
    },
    {
      text: 'Read for 1 hour',
      hover: false,
      completed: false,
    },
    {
      text: 'Pick up groceries',
      hover: false,
      completed: false,
    },
    {
      text: 'Complete Todo App on Frontend Mentor',
      hover: false,
      completed: false,
    },
  ];
  InputedText = '';
  NumberDisplayed = this.TDList.length.toString();
  /* ____________________ADD Todo______________ */
  onEnter() {
    if (this.InputedText != '') {
      const td: ToDoList = {
        text: this.InputedText,
        hover: false,
        completed: false,
      };
      this.TDList.push(td);
      this.InputedText = '';
      this.NumberDisplayed = this.TDList.length.toString();
    }
  }
  /* _________________________Theme____________ */
  ChangeTheme() {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const page = document.getElementById('page');
    const headOfList = document.getElementById('headOfList');
    const input = document.getElementById('ToDoInput');
    const ulList = document.getElementById('ToDoList');
    const footone = document.getElementById('footone');
    const foottwo = document.getElementById('foottwo');

    if (sun?.classList.contains('close')) {
      /* ______Dark_____ */
      sun?.setAttribute('class', '');
      moon?.setAttribute('class', 'close');
      page?.setAttribute('class', 'pagedark');
      headOfList?.setAttribute('class', 'head_dark');
      input?.setAttribute('class', 'input_dark');
      ulList?.setAttribute('class', 'list list_dark');
      footone?.setAttribute('class', 'foot1 foot_dark');
      foottwo?.setAttribute('class', 'foot2 foot_dark');
    } else {
      /* _____Light_____ */
      sun?.setAttribute('class', 'close');
      moon?.setAttribute('class', '');
      page?.setAttribute('class', 'pagelight');
      headOfList?.setAttribute('class', 'head_light');
      input?.setAttribute('class', 'input_light');
      ulList?.setAttribute('class', 'list list_light');
      footone?.setAttribute('class', 'foot1 foot_light');
      foottwo?.setAttribute('class', 'foot2 foot_light');
    }
  }
  /* ___________________DeleteOne__________ */
  deleteItem(item: ToDoList) {
    for (let i = 0; i < this.TDList.length; i++) {
      if (this.TDList[i] == item) this.TDList.splice(i, 1);
    }
    this.NumberDisplayed = this.TDList.length.toString();
  }
  /* _____________________SelectBut_________ */

  selc = 'all';
  All_ToDo() {
    this.selc = 'all';
  }
  Active_ToDo() {
    const all = document.getElementById('all');
    all?.setAttribute('class', 'Mp1');
    this.selc = 'active';
  }
  Completed_ToDo() {
    const all = document.getElementById('all');
    all?.setAttribute('class', 'Mp1');
    this.selc = 'completed';
  }

  /*_____________________Hover______________________ */

  circleIn(el: HTMLDivElement, item: ToDoList) {
    const moon = document.getElementById('moon');
    if (!item.completed) {
      if (moon?.classList.contains('close')) el.className = 'circleIn_dark';
      else el.className = 'circleIn_light';
    }
  }
  circleOut(el: HTMLDivElement, item: ToDoList) {
    if (!item.completed) el.className = 'circleOut';
  }
  /* __________________CompletedToDo________________ */
  CompletedToDo(el: HTMLDivElement, item: ToDoList, p: HTMLParagraphElement) {
    if (item.completed == false) {
      item.completed = true;
      el.setAttribute('class', 'circleCompleted');
      p.className = 'Pcompleted';
    } else {
      item.completed = false;
      el.setAttribute('class', 'circleOut');
      p.className = '';
    }
  }
  /* ____________________ClearCompleted_______________ */
  ClearCompleted() {
    for (let i = 0; i < this.TDList.length; ) {
      if (this.TDList[i].completed) {
        this.TDList.splice(i, 1);
      } else {
        i++;
      }
    }
    this.NumberDisplayed = this.TDList.length.toString();
  }
  /* _____________________DragDrop_______________________ */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.TDList, event.previousIndex, event.currentIndex);
  }
}
