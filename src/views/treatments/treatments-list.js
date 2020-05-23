import $ from 'jquery';
import { treatmentsService } from '../../common/treatments-service';
import { treatmentsListItem  } from './treatments-list-item';

const  treatmentsArray = [];
const treatmentsList = () => {
    const ul = $(`<ul id="treatments-list" class="list-group"></ul>`);
    

    treatmentsService.getTreatments()
     .then(treatments => treatments.map(treatment => {
        treatmentsArray.push(treatment);
        return treatmentsListItem(treatment);
     }))
     .then(treatmentsListItems => ul.append(treatmentsListItems));

    return ul;
};

export { treatmentsList, treatmentsArray }