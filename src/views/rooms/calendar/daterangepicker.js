import $ from 'jquery';
import 'daterangepicker';
import { roomsList } from '../rooms-list';
import { roomsArr } from '../rooms-arr';

export const Daterangepicker = () => {
    const input = $(`<input id="daterange" value="" class="input-daterange"/>`);
    const now = new Date();
    var oneYearFromNow = new Date();

    //--- calculate one year from current date for calendar ---
    oneYearFromNow.setFullYear(now.getFullYear() + 1);

    input.daterangepicker({
        minDate: now,
        maxDate: oneYearFromNow,
        locale: { cancelLabel: 'Clear' } 
    });
    input.val("");  

    input.on('cancel.daterangepicker', function(ev, picker){
        input.val("");
        Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.addClass("hidden")); 
    });

    input.on('apply.daterangepicker', function(ev, picker) {
        console.log(picker.startDate.format('YYYY-MM-DD'));
        console.log(picker.endDate.format('YYYY-MM-DD'));
        Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.removeClass("hidden"));  

      });

    return input;
};
