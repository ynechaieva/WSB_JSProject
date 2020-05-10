import $ from 'jquery';
import 'daterangepicker';
import 'bootstrap';


export const home = () => {
  const fragment = $(new DocumentFragment());

  const homePage = $(`
    <div class="jumbotron jumbotron-home">
      <div class="container-home">
        <h1 class='greetings'>Hello, there!</h1>      
        <p class="home-p">
          This is first IT&SPA in the world. 
          We afford unique and very specific services which allow you relax and have fun alltogather.
          Fill free to join us and explore the new world of joy and happiness.
        </p>
        <p>
          <span class="home-show-details">Show details >></span>
        </p>
      </div>
    </div>
    <div class="home-columns-container container">
      <div class="row">
        <div class="col"> Column 1 of 2 </div>
        <div class="col"> Column 2 of 2 </div>
      </div>
    </div>
    `
    );

  fragment.append(homePage);

  const showDetails = function() {

    let text = $(this).html();
    $(".home-columns-container").toggle();

    if(text.replace('&gt;&gt;', '>>') == "Show details >>"){ 
      text = "Hide details >>";
      $(this).text(text);
    }
    else $(this).text("Show details >>");
  }
  
  homePage.find(".home-show-details").click(showDetails);

  return fragment;
};
