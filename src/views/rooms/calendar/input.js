import $ from 'jquery';
import 'daterangepicker';

export const Input = () => {
    const ipt = $('<input class="simple-input" />');

    ipt.daterangepicker();
    //$(function() { $("#e1").daterangepicker(); });
    ipt.click( () => {
        
        console.log('input is clicked');
    });

    return ipt;
};
