import $ from 'jquery';
import { roomsList } from './rooms-list';
import { Daterangepicker } from './calendar/daterangepicker';
import { Button } from '../../components/button';



export const rooms = () => {

  const drp = Daterangepicker;
  const btn = new Button("show-rooms-list");
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
  const rlist = $(`<div class='rooms-list'></div>`);

  fragment.append(jumbotron).append(rlist);
  
  btn.click( () => {
    rlist.append(roomsList());
  });

  return fragment;
};
