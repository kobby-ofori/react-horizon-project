import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-custom">
      <div class="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img
            src="images/sigma t&t.jpg"
            class="brand-logo"
            alt=""
            height="30px"
          />
          <a class="navbar-brand" href="#">
            SIGMA TRAVEL & TOUR
          </a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right custom-nav">
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
        </div>
        {/*<!-- /.navbar-collapse -->*/}
      </div>
      {/*<!-- /.container-fluid -->*/}
    </nav>
  );
};

export default Navbar;
