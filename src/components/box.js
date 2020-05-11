import $ from 'jquery';

export class Box {

    constructor() {
        this.init();
    }

    init() {
        this.box = $(`<div class="box"></box>`);
        this.image = $(`
        <div class="box-image">
            <img src="" alt="image-1"/>
        </div>`);

        this.content = $(`<div class="box-content"></div>`);
        this.header = $(`<div class="box-content-header"></div>`);
        this.description = $(`<div class="box-content-description"></div>`);
        this.footer = $(`<div class="box-content-footer"></div>`);
    }

    buildContent(header, descr, footer) {
        this.content.append(header).append(descr).append(footer);
        return this.content;
    }

    buildBox(image, content) {
        this.box.append(image).append(this.buildContent());
        return this.box;
    }

    addClassToBox(str) {
        this.box.addClass(str);
    }
};