import $ from 'jquery';
import { Cart } from '../../cart/cart';
import { Box } from '../../components/box';
import { Button } from '../../components/button';


const cart = new Cart();

export const roomsListItem = (room) => {
    const box = new Box();
    const bookBtn = new Button("room-order-btn-" + room.id);
    bookBtn.addClass("hidden").text("Book a room");
    const li = $('<li class="room-li"></li>').attr('id', room.id);
    let booked = room.booked;

    box.addClassToBox("room-box");

    addFlexClass(room.id);
    

    // --- build box for room
    let image = box.image.addClass("room-image");
    image.find('img').attr('src', room.img);
    let header = box.header.text(room.name).addClass('room-item room-name');
    let description = box.description.text(room.description).addClass('room-item room-description');
    description.html(`<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`);
    let beds = $(`<p> <b>Beds:</b> ${room.beds} </p>`);
    let guests = $(`<p> <b>Guests:</b> ${room.guests} </p>`);
    let price = $(`<p> <b>Price:</b> ${room.price} pln </p>`);

    
    let footer = box.footer.append(beds).append(guests).append(price);
    let content = box.buildContent(header, description, footer);

    li.append(box.buildBox(image, content));
    li.find(".box-content").append(bookBtn);

    // --- functions ---
    const bookRoom = function() {
        cart.add('rooms', room.id);
        console.log("room.id " + room.id);
    };

    function addFlexClass(n) {
        if(isEven(n)) {
            box.addClassToBox("room-right" );
        } 
        else { box.addClassToBox("room-left")};
    };

    function isEven(n){
        return n % 2 == 0;
    };

    // ---events ---
    bookBtn.click(bookRoom);



    //--- return ---
    return li;
};
