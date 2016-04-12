import {Pipe, PipeTransform} from 'angular2/core';
import {Todo} from '../services/store';

@Pipe({
    name: 'completed',
    pure: false
})

export class CompletedPipe implements PipeTransform {
    transform(value: Array<Todo>, [completed]) {
        if (completed == undefined) { return value; }
        return value.filter((todo) => { return todo.completed == completed });
    }
}