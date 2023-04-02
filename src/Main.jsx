import React, { Component } from "react";

export class Main extends Component {
  render() {
    return (
      <div class="container card-container">
        <div class="row text-center">
          <h3>SERVICES</h3>

          <div class="col-md-3">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="images/christian-lambert-DdaNKzy9q3A-unsplash.jpg"
                class="card-img-top img-responsive"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">BOOK A FLIGHT</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="images/andy-wang-9kmqUxq8VlM-unsplash.jpg"
                class="card-img-top img-responsive"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> MEET THE BEST CREW</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="images/jonathan-borba-LR5O79shvro-unsplash.jpg"
                class="card-img-top img-responsive"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">INTERCITY COACH SERVICE</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style={{width: "18rem"}}>
              <img
                src="images/igor-sporynin-SJRhn0CpFf8-unsplash.jpg"
                class="card-img-top img-responsive"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">SIGHTSEEING</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
