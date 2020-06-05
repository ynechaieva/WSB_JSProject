import $ from "jquery";
import "daterangepicker";
import { roomsList } from "../rooms-list";
import { roomsArr } from "../rooms-arr";

export class DaterangePicker {
  constructor() {
    this.init();

    return this.drp;
  }

  addClassToElems(arr, class_) {
    Array.of(arr).forEach((elem) => elem.addClass(class_));
  }

  removeClassFromElems(arr, class_) {
    Array.of(arr).forEach((elem) => elem.removeClass(class_));
  }

  getStartDate() {
    return this.startDate;
  }

  getEndDate() {
    return this.endDate;
  }

  init() {
    this.drp = $(`<input id="daterange" value="" class="input-daterange"/>`);
    const now = new Date();
    var oneYearFromNow = new Date();

    //--- calculate one year from current date for calendar ---
    oneYearFromNow.setFullYear(now.getFullYear() + 1);

    this.drp.daterangepicker({
      minDate: now,
      maxDate: oneYearFromNow,
      locale: { cancelLabel: "Clear" },
    });
    this.drp.val("");
  }
} // --- end of class
