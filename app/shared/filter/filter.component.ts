import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoStore} from '../../services/store';
import {SegmentedBar} from 'ui/segmented-bar';

@Component({
    selector: 'Filter',
    templateUrl: 'shared/filter/filter.html',
    styleUrls: ['shared/filter/filter.css']
})

export class FilterComponent {
    @Output() filterChange = new EventEmitter();
    
    completed: boolean = null;
    
    filterCompleted(filter: boolean) {
        this.filterChange.emit({
            value: filter
        });
    }
    
    filterActions: Array<any> = [
        { title: 'All', value: null },
        { title: 'Active', value: false },
        { title: 'Done', value: true }
    ]
}