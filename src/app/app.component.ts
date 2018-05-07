import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	todoList: any[];
	todo = '';

	constructor() {
		this.todoList = [
			'attend the boot camp',
			'do the homework',
			'bring candy to Juan',
			'participate'
		];
	}

	addTodo(event: any) {
		this.todo = event;
		this.todoList.unshift(this.todo);
	}

	deleteTodo(index: number) {
		this.todoList.splice(index, 1);
	}
}
