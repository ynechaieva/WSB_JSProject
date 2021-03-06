import $ from "jquery";
import { Cart } from "../../cart/cart";
import { Box } from "../../components/box";
import { Button } from "../../components/button";
//import { DaterangePicker } from '../rooms/calendar/daterangepicker';
import { Router } from "../../router/router";

const cart = new Cart();

export const roomsListItem = (room) => {
  const box = new Box();
  const bookBtn = new Button("room-order-btn-" + room.id);
  bookBtn.addClass("hidden").text("Book a room");
  const li = $(`<li id="${room.id}" class="room-li"></li>`);
  let booked = room.booked;

  box.addClassToBox("room-box");
  box.footer.addClass("room-footer");

  addFlexClass(room.id);

  // --- build box for room
  let image = box.image.addClass("room-image");
  image.find("img").attr("src", room.img);
  let header = box.header.text(room.name).addClass("room-item room-name");
  let description = box.description
    .html(room.description)
    .addClass("room-item room-description");
  // description.html(`<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  //                   <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  //                   <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`);
  let beds = $(`<p> <b>Beds:</b> ${room.beds} </p>`);
  let guests = $(`<p> <b>Guests:</b> ${room.guests} </p>`);
  let price = $(`<p> <b>Price:</b> ${room.price} pln </p>`);

  let footer = box.footer.append(beds).append(guests).append(price);
  let content = box.buildContent(header, description, footer);

  li.append(box.buildBox(image, content));
  li.find(".box-content").addClass("room-box-content");
  li.find(".box-content").append(bookBtn);

  // --- functions ---
  const bookRoom = function () {
    let inputVal = $("#daterange").val();
    var flag = checkDates(inputVal);
    if (flag) {
      if (checkRange(inputVal)) {
        cart.add("rooms", {
          roomid: room.id,
          roomname: room.name,
          roomprice: room.price,
          roomrange: inputVal,
        });
      } else {
        $("#rooms-list").innerHTML("");
      }
    } else {
      alert("StartDate is more than EndDate. Plase select correct daterange");
      $("#daterange").val("");
    }
    window.location.href = "/booking";
  };

  function addFlexClass(n) {
    if (isEven(n)) {
      box.addClassToBox("room-right");
    } else {
      box.addClassToBox("room-left");
    }
  }

  function isEven(n) {
    return n % 2 == 0;
  }

  const checkRange = function (daterange) {
    let iStartDate = new Date(daterange.split(" - ")[0]);
    let iEndtDate = new Date(daterange.split(" - ")[1]);

    let arr = room.booked.filter((bookedRange) => {
      let startDate = new Date(bookedRange.split(" - ")[0]);
      let endtDate = new Date(bookedRange.split(" - ")[1]);

      return (
        startDate <= iStartDate <= endtDate ||
        startDate <= iEndtDate <= endtDate
      );
    });

    return arr.length == 0;
  };

  const checkDates = (daterange) => {
    let iStartDate = new Date(daterange.split(" - ")[0]);
    let iEndtDate = new Date(daterange.split(" - ")[1]);
    if (iStartDate > iEndtDate) {
      return false;
    } else return true;
  };

  // ---events ---
  bookBtn.click(bookRoom);

  //--- return ---
  return li;
};
