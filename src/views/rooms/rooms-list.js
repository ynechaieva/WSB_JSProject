import $ from 'jquery';
import { roomsService } from '../../common/rooms-service';
import { roomsListItem } from './rooms-list-item';

const  roomsArray = [];
const roomsList = () => {
  const ul = $('<ul id="rooms-list" class="list-group"></ul>');

 
  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  roomsService.getRooms()
    .then(rooms => rooms.map(room => { 
      roomsArray.push(room);
      return roomsListItem(room);
    }))
    .then(roomsListItems => ul.append(roomsListItems));

    //console.log(roomsArray);
  return ul;
};

export { roomsList, roomsArray }