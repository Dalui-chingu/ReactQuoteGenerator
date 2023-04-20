import React, { Component } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Add extends Component {
  render() {
    return (
      <form>
        <h3>Add Your Quote</h3>
        <div className="mb-3">
          <input
            type="textarea"
            rows="3"
            className="form-control"
            placeholder="Write your Quote here"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
          Add
          </button>
        </div>
      </form>
    )
  }
}