import $ from 'jquery';
import 'daterangepicker';
import { roomsList } from '../rooms-list';

export const Daterangepicker = () => {
    const input = $(`<input id="daterange" value="" class="input-daterange"/>`);
    const now = new Date();
    var oneYearFromNow = new Date();

    //--- calculate one year from current date for calendar ---
    oneYearFromNow.setFullYear(now.getFullYear() + 1);

    input.daterangepicker({
        minDate: now,
        maxDate: oneYearFromNow,
    });
    input.val("");  

    input.on('cancel.daterangepicker', function(ev, picker){
        input.val("");
    });

    input.on('apply.daterangepicker', function(ev, picker) {
        //console.log(picker.startDate.format('YYYY-MM-DD'));
        //console.log(picker.endDate.format('YYYY-MM-DD'));
        $(".rooms-list").append(roomsList());
      });

    return input;
};
