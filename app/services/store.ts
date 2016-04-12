import {Injectable} from 'angular2/core';
import * as appSettings from 'application-settings';

export class Todo {
	completed: Boolean;
	editing: Boolean;

	private _title: String;
	get title() {
		return this._title;
	}
	set title(value: String) {
		this._title = value.trim();
	}

	constructor(title: String) {
		this.completed = false;
		this.editing = false;
		this.title = title.trim();
	}
}

@Injectable()
export class TodoStore {
	todos: Array<Todo>;
    completedFilter: Boolean = null;
   
	constructor() {
        
		let persistedTodos = JSON.parse(appSettings.getString('angular2-todos') || '[]');
		// Normalize back into classes
		this.todos = persistedTodos.map( (todo: {_title: String, completed: Boolean}) => {
			let ret = new Todo(todo._title);
			ret.completed = todo.completed;
			return ret;
		});
	}

	private updateStore() {
		appSettings.setString('angular2-todos', JSON.stringify(this.todos));
	}

	private getWithCompleted(completed: Boolean) {
		return this.todos.filter((todo: Todo) => todo.completed === completed);
	}

	allCompleted() {
		return this.todos.length === this.getCompleted().length;
	}

	setAllTo(completed: Boolean) {
        console.log(completed);
		this.todos.forEach((t: Todo) => t.completed = completed);
		this.updateStore();
	}

	removeCompleted() {
		this.todos = this.getWithCompleted(false);
		this.updateStore();
	}

	getRemaining() {
		return this.getWithCompleted(false);
	}

	getCompleted() {
		return this.getWithCompleted(true);
	}

	toggleCompletion(todo: Todo) {
		todo.completed = !todo.completed;
		this.updateStore();
	}

	remove(todo: Todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
		this.updateStore();
	}

	add(title: String) {
		this.todos.push(new Todo(title));
		this.updateStore();
	}
    
    filterCompleted(args: any) {
        this.completedFilter = args.value;
    }
}