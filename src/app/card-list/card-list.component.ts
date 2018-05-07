import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: [ './card-list.component.scss' ]
})
export class CardListComponent implements OnInit {
	// @Input() todoL: {}[];
	@Output() sendTodo = new EventEmitter<string>();

	onSendTodo(todo: string) {
		this.sendTodo.emit(todo);
	}

	ngOnInit() {}
}
