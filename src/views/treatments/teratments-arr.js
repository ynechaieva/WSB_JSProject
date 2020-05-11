import $ from 'jquery';
import { treatmentsService } from '../../common/treatments-service';

export const treatmentsList = () => {
    const list = [];

    treatmentsService.getTreatments()
    .then(treatments => treatments.map(treatment => list.push(treatment)));

    console.log(list);

    return list;
};