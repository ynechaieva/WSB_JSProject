import $ from 'jquery';
import { Cart } from "../../cart/cart";

const cart = new Cart();

export const booking = () => {
  const fragment = $(new DocumentFragment());
  const cookieObj = cart.get();


  const container = $(`<div class="booking-container"></div>`);

  const data_table = $(`
  <div class="table-responsive-sm">
    <table class="table rooms-table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Booked rooms: ${cookieObj.rooms.length}</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody class="rooms-tb">
      </tbody>
      <thead>
        <tr>
          <th scope="col">Booked treatments: ${cookieObj.treatments.length}</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody class="treatments-tb">
      </tbody>
    </table>
  </div>
 `);

  const remove = function(e) {
    cart.delete($(e.target).attr("type"), $(e.target).attr("id"));
    location.reload();
  };


  cookieObj.rooms.forEach(function(item){
    //--- create data row
    let table_row = $(`
    <tr>
      <td>${item.roomname}</td>
      <td>${item.roomprice} pln</td>
      <td>${item.roomrange}</td>
      <td> <button id="${item.roomid}" type="rooms" class="remove-btn btn btn-light">remove</button></td>
    </tr>
    `);

    table_row.find(".remove-btn").click(remove);
    data_table.find(".rooms-tb").append(table_row);
  });

  cookieObj.treatments.forEach(function(item){
    //--- create data row
    let table_row = $(`
    <tr>
      <td>${item.treatmentname}</td>
      <td>${item.treatmentprice} pln</td>
      <td></td>
      <td> <button id="${item.treatmentid}" type="treatments" class="remove-btn btn btn-light">remove</button></td>
    </tr>
    `);

    table_row.find(".remove-btn").click(remove);
    data_table.find(".treatments-tb").append(table_row);
  });

  container.append(data_table);
  fragment.append(container);

  return fragment;
};
