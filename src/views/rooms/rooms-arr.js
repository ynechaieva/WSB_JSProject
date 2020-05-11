import $ from 'jquery';
import { roomsService } from '../../common/rooms-service';

export const roomsList = () => {
    const list = [];

    roomsService.getRooms()
    .then(rooms => rooms.map(room => list.push(room)));

    console.log(list);

    return list;
};