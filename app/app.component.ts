import {Component, Inject, OnInit} from 'angular2/core';
import {TodoStore, Todo} from './services/store';
import {FooterComponent} from './shared/footer/footer.component';
import {FilterComponent} from './shared/filter/filter.component';
import {CompletedPipe} from './pipes/completed';
import {Page} from 'ui/page';
import {topmost} from 'ui/frame';

@Component({
    selector: 'my-app',
    templateUrl: "app.html",
    providers: [TodoStore],
    directives: [FooterComponent, FilterComponent],
    styleUrls: ['app-common.css', 'app.css'],
    pipes: [CompletedPipe]
})

export class TodoApp implements OnInit {
    todoStore: TodoStore;
    newTodoText = '';
    
    ngOnInit() {
        var page = <Page>topmost().currentPage;
        page.actionBarHidden = true;
    }
    
    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }
    
    updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;
        
        if (editedTitle.length == 0) {
            this.todoStore.remove(todo);
        }
       
       todo.title = editedTitle;
    }
    
    removeCompleted() {
		this.todoStore.removeCompleted();
	}

	toggleCompletion(todo: Todo) {
		this.todoStore.toggleCompletion(todo);
	}

	remove(todo: Todo){
		this.todoStore.remove(todo);
	}

	addTodo() {
		if (this.newTodoText.trim().length) {
			this.todoStore.add(this.newTodoText);
			this.newTodoText = '';
		}
	}
}