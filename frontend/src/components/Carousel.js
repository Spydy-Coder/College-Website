import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxHeight: "500px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pataskala_Elementary_School.jpg"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://jooinn.com/images/primary-school-classroom-5.jpg"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/R.fe37f790da5d0c9b1724cbdccbf9e0b7?rik=vIVMU%2be%2bf1fB0Q&riu=http%3a%2f%2fwww.aaascholarships.org%2fwp-content%2fuploads%2f2015%2f12%2fStudents-in-classroom.jpg&ehk=eCij%2b%2bBOsmz8czBO74F1E6nuDL9ZGTqW4UcOtzBY2wI%3d&risl=&pid=ImgRaw&r=0"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
