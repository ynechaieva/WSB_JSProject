import $ from 'jquery';
import { roomsList } from '../views/rooms/rooms-list';

// export const Button = () => {
//     const btn = $('<button class="rooms-btn btn-default btn bg-dark text-light"> Submit </button>');

//     btn.click( () => {
//         console.log('jestem btn');
//         const fragment = $(new DocumentFragment());
//         fragment.append(roomsList());

//         return fragment;
//     });

//     return btn;
// };

export class Button {

    constructor(id) {
        this.init();
        return this.btn;
    }

    init(id) {
        this.btn = $(`<button class="btn btn-default bg-dark text-light"> Submit </button>`);
        this.btn.attr("id", id);
    }

    // click(elem) {
    //     if(this.btn.attr("id") == "show-rooms-list") {

    //         console.log('jestem btn dla show-rooms-list');
    //         elem.append(roomsList());
            
    //         return elem;
    //     }else return 0;
    // }

}// end of class