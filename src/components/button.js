import $ from 'jquery';
import { roomsList } from '../views/rooms/rooms-list';

export const Button = () => {
    const btn = $('<button class="rooms-btn btn-default btn bg-dark text-light"> Submit </button>');

    btn.click( () => {
        console.log('jestem btn');
        const fragment = $(new DocumentFragment());
        fragment.append(roomsList());

        return fragment;
    });

    return btn;
};
