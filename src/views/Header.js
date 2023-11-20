import React from "react";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div>
      <div className="event&Attachment row d-flex p-5">
        <h2 className="col-6">Event & Attachments</h2>
        <button
          type="button"
          class="create col-3 btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Create
        </button>

        <Button variant="light" className="manage col-3" disabled>
          Manage
        </Button>
      </div>
    </div>
  );
}

export default Header;
