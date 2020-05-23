import $ from 'jquery';
import { roomsList, roomsArray } from './rooms-list';
import { DaterangePicker } from './calendar/daterangepicker';
import { Cart } from '../../cart/cart';

const cart = new Cart();

export const rooms = () => {
  const drp = new DaterangePicker();
  const fragment = $(new DocumentFragment());
  
  const jumbotron = $(`
  <div class="jumbotron jumbotron-rooms">
    <div class="container">
      <h4>Rooms</h4>
      <p>Please, select proper date range to find available room for booking:</p> 
    </div>
  </div>`
  );
  
  jumbotron.find(".container").append(drp);
  const rlist = $(`<div class='global-rooms-list'></div>`);
  rlist.append(roomsList);

  fragment.append(jumbotron).append(rlist);

  // --- events ---
  drp.on('apply.daterangepicker', function(ev, picker) {
    showAvailableRoomsForRange(drp.val());
    Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.removeClass("hidden"));  
  });

  drp.on('cancel.daterangepicker', function(ev, picker){
    drp.val("");
    Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.addClass("hidden")); 
    $(".room-li").removeClass("hidden");
  });
  // --- 


  // --- functions
  const showAvailableRoomsForRange = function(daterange) {
    let arr = roomsArray;
    
    for(let i = 0; i < arr.length; i++){
      let flag = isBooked(arr[i].booked, daterange);
      if(flag){
        $(`li#${arr[i].id}.room-li`).addClass("hidden");
      }
      else {
        let roomrange = cart.get().rooms.filter(function(room) {
          return room.roomid == arr[i].id;
        }).map(room => room.roomrange);
        let cartFlag = isBooked(roomrange, daterange);
        if(cartFlag){
          $(`li#${arr[i].id}.room-li`).addClass("hidden");
        }
        else {  
          continue; 
        }
      }
    }
  };

const isBooked = function(arr, input) {
  let inputStartDate = new Date(input.split(" - ")[0]);
  let inputEndDate = new Date(input.split(" - ")[1]);

  for(let i = 0; i < arr.length; i++) {
    let bookedStartDate = new Date(arr[i].split(" - ")[0]);
    let bookedEndDate = new Date(arr[i].split(" - ")[1]);
    
    if ((bookedStartDate <= inputStartDate <= bookedEndDate) || (bookedStartDate <= inputEndDate <= bookedEndDate)){
      return true;
    }
  }
  return false;
 };

 return fragment;
};
