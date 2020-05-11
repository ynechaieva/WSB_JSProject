import $ from 'jquery';
import 'daterangepicker';
import 'bootstrap';


export const home = () => {
  const fragment = $(new DocumentFragment());

  const homePage = $(`
      <div class="jumbotron jumbotron-home">
          <h1 class='greetings'>Hello, there!</h1>      
          <p class="home-p">
            This is first IT&SPA in the world. 
            We afford unique and very specific services which allow you relax and have fun alltogather.
          </p>
          <p>Fill free to join us and explore the new world of joy and happiness.</p>
          <p> <span class="home-show-details">Show details >></span> </p>
      </div>

      <div class="home-columns-container container">
        <div class="row details-headers ">
          <div class="col">
            <h3>Rooms</h3>
            <p>We offer different rooms in modern design to make your stay comfortable. </p>
            <p>You can book rooms for specific date range and spend time with your friens and family or work and relax at the same time</p>
            <a href="/rooms">more >> </a>
          </div>
          <div class="col">
            <h3>Treatments</h3>
            <p>In our list you can find different treatments for any needs. </p>
            <p>List of treatments we offer are very unique, hence you can relax and have fun at the same time</p>
            <a href="/treatments">more >> </a>
          </div>
          <div class="col">
            <h3>About</h3>
            <p>This is first project developed by Yevheniia. </p>
            <p>If you have any suggestions which may help improve the project, please, send you thoughts on email ynechaieva@outlook.com</p>
          </div>
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
