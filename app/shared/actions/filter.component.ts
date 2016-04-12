import {Component} from 'angular2/core';

@Component({
    selector: 'filter',
    templateUrl: 'shared/filter/filter.html'
})

export class FilterComponent {
    filterActions: Array<any> = [
        { title: 'All' },
        { title: 'Active' },
        { title: 'Done' }
    ]
}