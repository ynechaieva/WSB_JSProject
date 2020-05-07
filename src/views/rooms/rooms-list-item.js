import $ from 'jquery';
import { Cart } from '../../cart/cart';
import { Box } from '../../components/box';

const cart = new Cart();

export const roomsListItem = (room) => {
    const box = new Box();
    const li = $('<li class="room-box"></li>');

    // --- build box for room
    let header = box.header.text(room.name).addClass('room-item room-name');
    let description = box.description.text(room.description).addClass('room-item room-description');
    let footer = box.footer.text(`beds: ${room.beds} | guests: ${room.guests} | price: ${room.price}pln`);
    let content = box.buildContent(header, description, footer);

    let image = box.image;

    li.append(box.buildBox(image, content));

    // --- events start ---
    const addRoomToCart = function() {
        cart.add('rooms', room);
    }
    li.click(addRoomToCart);

    //--- return ---
    return li;
};

    // let name = $('<span></span>').text(room.name).addClass('roomItem');
    // let beds = $('<span></span>').text(room.beds).addClass('roomItem');
    // let guests = $('<span></span>').text(room.guests).addClass('roomItem');
    // let price = $('<span></span>').text(room.price + ' pln').addClass('roomItem');
    // li.append(name).append(beds).append(guests).append(price);