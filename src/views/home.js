import $ from 'jquery';
import 'daterangepicker';
import 'bootstrap';


export const home = () => {
  const fragment = $(new DocumentFragment());

  const homePage = $(`
    <div class="jumbotron">
      <div class="container">
        <h1 class='greetings'>Hello, world!</h1>      
        <p>
          This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. 
          Use it as a starting point to create something more unique.
        </p>
        <p>
          <a href="#">Lern more >></a>
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class='col-md-4'>

        </div>
      </div>
    </div>`
    );

  fragment
    .append(homePage);

  return fragment;
};
