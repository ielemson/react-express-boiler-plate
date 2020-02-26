import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
  state = {
    customers: []
  };
  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers =>
        this.setState(
          {
            customers
          },
          () => console.log("customers fetched", customers)
        )
      )
      .catch(err => {
        console.log(err);
      });
  }
  render(h) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <h6 className="text-muted">Customers List</h6>
            <ul className="list-group">
              {this.state.customers.map(customer => (
                <li className="list-group-item" key={customer.id}>
                  <i className="fas fa-male text-info mx-2"></i>
                  {customer.firstname} - {customer.lastname}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Customers;
