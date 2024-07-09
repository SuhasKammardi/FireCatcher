import React from "react";

function Cards() {
  return (
    <div className="container-fluid mt-4" style={{ marginTop: "0px", marginBottom: "10px" }}>
      <div className="row">
        <div className="results1">
          <div className="col-md-4 mt-4 pt-2">
            <div className="card shop-features border-0 rounded overflow-hidden">
              <figure>
                <img
                  src="Card1.webp"
                  className="img-fluid"
                  alt="Mountain Bicycles"
                  title="Mountain Bicycles"
                />
              </figure>
              <div className="category-title ms-md-4 ms-2">
                <h4>Mountain Bicycles</h4>
                <a href="/bicycles/Mountain-bicycle" className="mt-2">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 pt-2">
            <div className="card shop-features border-0 rounded overflow-hidden">
              <figure>
                <img
                  src="Card2.webp"
                  className="img-fluid"
                  alt="Ranger Bicycle"
                  title="Ranger Bicycle"
                />
              </figure>
              <div className="category-title ms-md-4 ms-2">
                <h4>Ranger Bicycle</h4>
                <a href="/bicycles/Ranger-bicycle" className="mt-2">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 pt-2">
            <div className="card shop-features border-0 rounded overflow-hidden">
              <figure>
                <img
                  src="Card3.webp"
                  className="img-fluid"
                  alt="Racing Bicycle"
                  title="Racing Bicycle"
                />
              </figure>
              <div className="category-title ms-md-4 ms-2">
                <h4>Racing Bicycle</h4>
                <a href="/bicycles/Racing-bicycle" className="mt-2">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
