import $ from 'jquery';
import { Cart } from '../../cart/cart';

const cart = new Cart();

export const treatmentsListItem = (treatment) => {
    const li = $('<li class="list-group-item treatmentRow"></li>')
        .attr('id', treatment.id);
   
    let name = $('<span></span>').text(treatment.name).addClass('treatmentItem treatment-name');
    let area = $('<span></span>').text(treatment.area).addClass('treatmentItem treatment-area');
    let time = $('<span></span>').text(treatment.time + ' min').addClass('treatmentItem treatment-time');
    let price = $('<span></span>').text(treatment.price + ' pln').addClass('treatmentItem treatment-price');
    li.append(name).append(area).append(time).append(price);
    
    const addTreatmentToCart = function() {
        cart.add('treatments', treatment);
    }


    li.click(addTreatmentToCart);
 
    return li;
};

