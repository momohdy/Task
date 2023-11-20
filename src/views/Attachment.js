import React, { useState } from "react";
import "../styles/Attachment.css";
import Table from "./Table";
import Header from "./Header";

function Attachment() {
  const [attachmentType, setAttachmentType] = useState("Document");
  const [eventData, setEventData] = useState({
    eventTitle: "",
    eventType: "",
    sourcingStrategy: "",
    description: "",
  });
  const [documentData, setDocumentData] = useState(null);

  const handleAttachmentTypeChange = (event) => {
    setAttachmentType(event.target.value);
  };

  const handleEventInputChange = (field, value) => {
    setEventData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDocumentInputChange = (file) => {
    setDocumentData(file);
  };

  const handleConfirm = () => {
    // Create an object based on attachmentType
    const dataObject =
      attachmentType === "Event"
        ? eventData
        : attachmentType === "Document"
        ? { document: documentData }
        : {};

    // Convert object to JSON string
    let jsonString = JSON.stringify(dataObject);

    // Store JSON string in local storage
    localStorage.setItem("myData", jsonString);

    // Retrieve JSON string from local storage
    let storedData = localStorage.getItem("myData");

    // Convert JSON string back to object
    let retrievedObject = JSON.parse(storedData);

    // Print the retrieved object to the console
    console.log(retrievedObject);

    // Reset the states
    setAttachmentType("Document");
    setEventData({
      eventTitle: "",
      eventType: "",
      sourcingStrategy: "",
      description: "",
    });
    setDocumentData(null);
  };

  return (
    <div className="container">
    
      <Header />

      <div class="popup modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create Attachment</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <div className="attachmentTypeDropdown mb-3">
                <h5>
                  Attachment Type <span style={{ color: "red" }}>*</span>{" "}
                </h5>
                <select
                  className="form-select"
                  value={attachmentType}
                  onChange={handleAttachmentTypeChange}
                >
                  <option value="Document">Document</option>
                  <option value="Event">Event</option>
                </select>
              </div>

              {/** LOGIC */}
              <form>
                {attachmentType === "Event" && (
                  <div className="mb-3">
                    <div className="mb-3">
                      <label className="form-label required">
                        Event Title <span style={{ color: "red" }}> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Event Title"
                        value={eventData.eventTitle}
                        onChange={(e) =>
                          handleEventInputChange("eventTitle", e.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label required">
                        Event Type <span style={{ color: "red" }}> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Event Type"
                        value={eventData.eventType}
                        onChange={(e) =>
                          handleEventInputChange("eventType", e.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label required">
                        Sourcing Strategy{" "}
                        <span style={{ color: "red" }}> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Sourcing Strategy"
                        value={eventData.sourcingStrategy}
                        onChange={(e) =>
                          handleEventInputChange(
                            "sourcingStrategy",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label required">
                        Description <span style={{ color: "red" }}> *</span>
                      </label>
                      <textarea
                        rows="5"
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Description"
                        value={eventData.description}
                        onChange={(e) =>
                          handleEventInputChange("description", e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}
                {attachmentType === "Document" && (
                  <div className="mb-3">
                    <label className="form-label required">
                      Upload Document
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) =>
                        handleDocumentInputChange(e.target.files[0])
                      }
                    />
                  </div>
                )}
              </form>
              {/** */}
            </div>

            <div class="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                type="button"
                class="btn btn-light ms-auto"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
}

export default Attachment;
