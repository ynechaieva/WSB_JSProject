import $ from 'jquery';
import { roomsService } from '../../common/rooms-service';
import { roomsListItem } from './rooms-list-item';

export const roomsList = () => {
  const ul = $('<ul id="rooms-list" class="list-group"></ul>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  roomsService.getRooms()
    .then(rooms => rooms.map(room => roomsListItem(room)))
    .then(roomsListItems => ul.append(roomsListItems));

  return ul;
};
