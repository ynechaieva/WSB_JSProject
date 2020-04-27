import $ from 'jquery';
import { Cart } from '../../cart/cart';

const cart = new Cart();

export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item roomRow"></li>');
    
    let name = $('<span></span>').text(room.name).addClass('roomItem');
    let beds = $('<span></span>').text(room.beds).addClass('roomItem');
    let guests = $('<span></span>').text(room.guests).addClass('roomItem');
    let price = $('<span></span>').text(room.price + ' PLN').addClass('roomItem');
    li.append(name).append(beds).append(guests).append(price);

    const addRoomToCart = function() {
        cart.add('rooms', room);
    }


    li.click(addRoomToCart);
    return li;
};
