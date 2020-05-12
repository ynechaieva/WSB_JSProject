import $ from 'jquery';
import { roomsList } from './rooms-list';
import { DaterangePicker } from './calendar/daterangepicker';



export const rooms = () => {
  const drp = new DaterangePicker();
  //const drp = Daterangepicker;
  //const btn = new Button("show-rooms-list");
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
  console.log(jumbotron.find(".container").html());
  const rlist = $(`<div class='global-rooms-list'></div>`);
  rlist.append(roomsList);

  fragment.append(jumbotron).append(rlist);


  drp.on('apply.daterangepicker', function(ev, picker) {
      Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.removeClass("hidden"));  
      //drp.removeClassFromElems($('[id*="room-order-btn-"]'), "hidden");
  });

  drp.on('cancel.daterangepicker', function(ev, picker){
      drp.val("");
      Array.of($('[id*="room-order-btn-"]')).forEach(elem => elem.addClass("hidden")); 
      //drp.addClassToElems($('[id*="room-order-btn-"]'), "hidden");
  });


  return fragment;
};
