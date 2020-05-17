import { roomsService } from '../../common/rooms-service';

const roomsArray = () => {

    let arr = [];
    roomsService.getRooms()
    .then(rooms => rooms.map(room => room.id))
    .then(roomsListItems => arr.push(roomsListItems));

    console.log(arr);

  return arr;
};

export { roomsArray };