import React from "react";

export default function Teachings() {
  return (
    <>
      <h1 className="display-3 fw-bold px-3 pt-3 text-center">Teachings</h1>
      <div className="row container m-4">
        <div className="col-12 col-md-8 p-3">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Nwgm9VuVaK4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center">
          <h1 className="display-4 fw-semibold px-3 py-1">
            What is Pollen Allergy
          </h1>
        </div>
      </div>

      <div className="row container m-4">
        <div className="col-12 col-md-4 d-flex align-items-center">
          <h1 className="display-4 fw-semibold px-3 py-1">
            How to Use an Inhaler
          </h1>
        </div>
        <div className="col-12 col-md-8 p-3">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/4jgb1vHDO6w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="row container m-4">
        <div className="col-12 col-md-8 p-3">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/zRt1RHgggUI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center">
          <h1 className="display-4 fw-semibold px-3 py-1">
            How to Wash Your Nose
          </h1>
        </div>
      </div>

      <div className="row container m-4">
        <div className="col-12 col-md-4 d-flex align-items-center">
          <h1 className="display-4 fw-semibold px-3 py-1">
            How to Avoid Viruses
          </h1>
        </div>
        <div className="col-12 col-md-8 p-3">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Pb9GYvZ63Yw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
