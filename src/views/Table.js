import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Table() {
  return (
    <div className="attachmentTable p-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Attachments</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">RFP</th>
              <td>
                <FontAwesomeIcon className="icon" icon="fa-solid fa-download" />
              </td>
            </tr>
            <tr>
              <th scope="row">Evaluation Criteria</th>
              <td>
                <FontAwesomeIcon icon="fa-solid fa-download" className="icon" />
              </td>
            </tr>
            <tr>
              <th scope="row">Evaluation MoM</th>
              <td>
                <FontAwesomeIcon icon="fa-solid fa-download" className="icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Table
