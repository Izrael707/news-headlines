import React from "react";

export const HomeCarousel = ({ newsArray }) => {
  return (
    <div className="carousel slide d-none d-md-block" id="homecarousel">
      <div className="carousel-indicators">
        {newsArray.map((element, index) => {
          if (element) {
            return (
              <button
                type="button"
                key={index}
                data-bs-target="#homecarousel"
                data-bs-slide-to={`${index}`}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            );
          } else {
            return ''
          }
        })}
      </div>

      <div className="carousel-inner">
        {newsArray.map((element, index) => {
          return (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={element.image_url}
                className="d-block w-100"
                alt={element.source}
                style={{height:'500px'}}
              />
              <div className="carousel-caption d-none d-md-block">
                <h4>{element.title}</h4>
                <p className="fs-5">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homecarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homecarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
