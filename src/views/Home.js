import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container mt-5">
      <div className="d-flex p-3">
        <h3 class="fw-bold">Header Details</h3>
        <button type="button" class="copyFromBtn btn btn-light ms-auto " disabled>
          Copy From
        </button>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="mb-3 p-3">
            <label className="form-label required">
              Project Title <span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              class="form-control p-3"
              placeholder="Please Enter Project Title "
            />
          </div>

          <div class="mb-3 p-3">
            <label className="form-label required">Description</label>
            <textarea
              rows="6"
              type="text"
              class="form-control p-3"
              placeholder="Please Enter Description"
            />
          </div>

          <div class="mb-3 p-3">
            <label className="form-label required">Owner</label>
            <input
              type="text"
              class="form-control p-3"
              placeholder="Waleed Mohammed"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3 p-3">
            <label className="form-label required">
              Currency <span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              class="form-control p-3"
              placeholder="Please Enter Currency "
            />
          </div>

          <div class="mb-3 p-3">
            <label className="form-label required">Preceding Document</label>
            <input
              type="text"
              value="123455"
              class="form-control p-3 text-primary"
              placeholder="Waleed Mohammed"
              readOnly
            />
          </div>

          <div class="mb-3 p-3">
            <label className="form-label required">Department</label>
            <input
              type="text"
              class="form-control p-3 text-primary"
              placeholder="Please Enter Department"
            />
          </div>

          <div class="mb-3 p-3">
            <label className="form-label required">
              Sourcing Strategy <span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              class="form-control p-3"
              placeholder="Please Enter Sourcing Strategy "
            />
          </div>
        </div>
      </div>

      <div className="row p-3">
        <button
          type="button"
          class="back btn btn-light col-3 me-5 p-2 "
          disabled
        >
          Back
        </button>
        <button
          type="button"
          class="saveAndCopy btn btn-primary me-3 col-3 ms-auto p-2 "
          disabled
        >
          Save & Copy
        </button>
        <span className="next text-center col-3 p-2">
          <Link to={{ pathname: `/Task/attachment` }}>Next</Link>
        </span>
      </div>
    </div>
  );
}

export default Home;
