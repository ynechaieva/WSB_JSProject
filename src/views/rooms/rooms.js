import $ from 'jquery';
import { roomsList } from './rooms-list';
import { Input } from './calendar/input';
import { Button } from '../../components/button';

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  fragment.append(Input)
          .append(roomsList())
          .append(Button); //.append(roomsList())

  return fragment;
};
