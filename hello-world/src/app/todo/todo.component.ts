import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  New_todo="";
  todos = [
  ];
  addNewTodo(){
    this.todos.push({task:this.New_todo});
    
  }

  removeTodo(task){

    let taskIndex=this.todos.indexOf(task);
    this.todos.splice(taskIndex,1);
  }
  ngOnInit() {
  }

}
