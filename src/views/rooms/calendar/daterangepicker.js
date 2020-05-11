import $ from 'jquery';
import 'daterangepicker';

export const Daterangepicker = () => {
    const input = $(`<input id="daterange" value="" class="input-daterange"/>`);
    const now = new Date();
    var oneYearFromNow = new Date();

    //--- calculate one year from current date for calendar ---
    oneYearFromNow.setFullYear(now.getFullYear() + 1);

    input.daterangepicker({
        minDate: now,
        maxDate: oneYearFromNow
    });
    input.val("");  

    return input;
};
