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
};

// export const Box = () => {
//     // --- create box structure ---
//     const box = $(`<div class="box"></box>`);

//     const boxImage = $(`
//     <div class="box-image">
//       <a href="">box-image-1</a>
//     </div>`);

//     const boxContent = $(`<div class="box-content"></div>`);
//     const boxHeader = $(`<div class="box-content-header"></div>`);
//     const boxDescription = $(`<div class="box-content-description"></div>`);
//     const boxFooter = $(`<div class="box-content-footer"></div>`);

//     boxContent.append(boxHeader).append(boxDescription).append(boxFooter);
//     box.append(boxImage).append(boxContent);


//     // --- box events ---
//     box.click( () => {
//         console.log('jestem box');
//     });

//     return box;
// };