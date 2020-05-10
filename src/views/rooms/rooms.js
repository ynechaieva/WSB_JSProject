import $ from 'jquery';
import { roomsList } from './rooms-list';
import { Input } from './calendar/input';
import { Button } from '../../components/button';



export const rooms = () => {

  const fragment = $(new DocumentFragment());
  const btn = new Button("show-rooms-list");
  const jumbotron = $(`
  <div class="jumbotron jumbotron-rooms">
    <div class="container">
      <p> Please, select proper date range to find available rooms for booking: </p> 
      
    </div>
  </div>`
  );
  
  jumbotron.find(".container").append(Input).append(btn);
  const rlist = $(`<div class='rooms-list'></div>`);

  //fragment.append(jumbotron);

  fragment.append(jumbotron).append(rlist);
  
  btn.click( () => {
    rlist.append(roomsList());
  });

  return fragment;
};
