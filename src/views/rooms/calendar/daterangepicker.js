import $ from 'jquery';
import 'daterangepicker';
import { roomsList } from '../rooms-list';
import { roomsArr } from '../rooms-arr';

export class DaterangePicker {

    constructor() {
        this.init();

        return this.drp;
    }

    // clear(arr, class_) {
    //     this.drp.on('cancel.daterangepicker', function(ev, picker){
    //         this.drp.val("");
    //         //Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.addClass("hidden")); 
    //         addClassToElems(arr, class_);
    //     });
    // }

    // apply(arr, class_) {
    //     this.drp.on('apply.daterangepicker', function(ev, picker) {
        
    //         this.startDate = picker.startDate.format('YYYY-MM-DD');
    //         this.endDate = picker.endDate.format('YYYY-MM-DD');
    //         //console.log(startDate);
    //         //console.log(endDate);
    //         //Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.removeClass("hidden"));  
    //         remoweClassFromElems(arr, class_);
    
    //       });
    // }

    
    addClassToElems(arr, class_) {
        Array.of(arr).forEach(elem => elem.addClass(class_));
    }

    removeClassFromElems(arr, class_) {
        Array.of(arr).forEach(elem => elem.removeClass(class_));
    }

    getStartDate() {
        return this.startDate;
    }


    getEndDate() {
      return this.endDate;
    }

    init(){
        this.drp = $(`<input id="daterange" value="" class="input-daterange"/>`);
        const now = new Date();
        var oneYearFromNow = new Date();

        //--- calculate one year from current date for calendar ---
        oneYearFromNow.setFullYear(now.getFullYear() + 1);

        this.drp.daterangepicker({
            minDate: now,
            maxDate: oneYearFromNow,
            locale: { cancelLabel: 'Clear' } 
        });
        this.drp.val("");
    }

} // --- end of class


// export const Daterangepicker = () => {
//     const input = $(`<input id="daterange" value="" class="input-daterange"/>`);
//     const now = new Date();
//     var oneYearFromNow = new Date();

//     let startDate = "";
//     let endDate = "";
//     //--- calculate one year from current date for calendar ---
//     oneYearFromNow.setFullYear(now.getFullYear() + 1);

//     input.daterangepicker({
//         minDate: now,
//         maxDate: oneYearFromNow,
//         locale: { cancelLabel: 'Clear' } 
//     });
//     input.val("");  

//     input.on('cancel.daterangepicker', function(ev, picker){
//         input.val("");
//         Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.addClass("hidden")); 
//     });

//     input.on('apply.daterangepicker', function(ev, picker) {
        
//         this.startDate = picker.startDate.format('YYYY-MM-DD');
//         this.endDate = picker.endDate.format('YYYY-MM-DD');
//         //console.log(startDate);
//         //console.log(endDate);
//         Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.removeClass("hidden"));  

//       });

//       function getStartDate() {
//           return this.startDate;
//       }


//       function getEndDate() {
//         return this.endDate;
//       }

//     return input;
// };