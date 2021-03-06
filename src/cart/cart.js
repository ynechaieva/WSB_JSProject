export class Cart {
  constructor() {
    this.key = "YNEC_CART";
  }

  cookie() {
    // PRZED: 'key1=val1; key2=val2; . . .'
    const cookies = document.cookie.split(";");
    // PO: ['key1=val1', 'key2=val2', . . .]
    const itSpaCookie = cookies.find((cookie) => cookie.startsWith(this.key));
    // PO: 'IT_SPA_CART=wartosc' LUB undefined
    return itSpaCookie;
  }

  exists() {
    return this.cookie() !== undefined;
  }

  get() {
    if (this.exists()) {
      // 'IT_SPA_CART=wartosc'
      const itSpaCookie = this.cookie(); // 'IT_SPA_CART={rooms:[], treatments:[]}'
      const cookiesObj = JSON.parse(itSpaCookie.split("=")[1]);
      return cookiesObj;
    } else {
      return this.init();
    }
  }

  add(type, value) {
    const cookiesObj = this.get();
    if (type == "treatments") {
      cookiesObj.treatments.push(value);
    } else if (type == "rooms") {
      cookiesObj.rooms.push(value);
    }

    const stringifiedValue = JSON.stringify(cookiesObj);
    const cookie = this.key + "=" + stringifiedValue;
    document.cookie = cookie;
  }

  delete(type, id) {
    const cookiesObj = this.get();
    if (type == "treatments") {
      cookiesObj.treatments = cookiesObj.treatments.filter((item) => {
        return item.treatmentid != id;
      });
    } else if (type == "rooms") {
      cookiesObj.rooms = cookiesObj.rooms.filter((item) => {
        return item.roomid != id;
      });
    }

    const stringifiedValue = JSON.stringify(cookiesObj);
    const cookie = this.key + "=" + stringifiedValue;
    console.log(cookie);
    document.cookie = cookie;
  }

  empty() {
    document.cookie =
      this.key + "=" + JSON.stringify({ rooms: [], treatments: [] });
  }

  init() {
    const cartObj = { rooms: [], treatments: [] };
    const cookie = this.key + "=" + JSON.stringify(cartObj);
    document.cookie = cookie;

    return cartObj;
  }

  getLength() {
    if (this.exists()) {
      const cartObj = this.get();
      let tlength = cartObj.treatments.length;
      let length = tlength + cartObj.rooms.length;
      return length;
    } else return 0;
  }
}
