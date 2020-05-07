import $ from 'jquery';
import { treatmentsService } from '../../common/treatments-service';
import { treatmentsListItem  } from './treatments-list-item';

export const treatmentsList = () => {
    const ul = $('<ul id="treatments-list" class="list-group"></ul>');

    treatmentsService.getTreatments()
     .then(treatments => treatments.map(treatment => treatmentsListItem(treatment)))
     .then(treatmentsListItems => ul.append(treatmentsListItems));

    return ul;
};