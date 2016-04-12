import {Component, Input} from 'angular2/core';
import {TodoStore} from '../../services/store';

@Component({
    selector: 'Filter',
    templateUrl: 'shared/filter/filter.html',
    styleUrls: ['shared/filter/filter.css']
})

export class FilterComponent {
    @Input() todoStore: TodoStore;
    
    filterActions: Array<any> = [
        { title: 'All', value: null },
        { title: 'Active', value: false },
        { title: 'Done', value: true }
    ]
}