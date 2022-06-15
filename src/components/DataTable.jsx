import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { EmpContext } from "../contexts/EmpContext";

class DataTable extends Component {
  render() {
    return (
      <Table responsive="sm" hover={true} variant="dark">
        <thead>
          <tr className="text-uppercase">
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            onItemSelect={this.props.onItemSelect}
            onEdit={(id) => this.props.onEdit(id)}
            onDelete={(id) => this.props.onDeleteItem(id)}
          />
        </tbody>
      </Table>
    );
  }
}

class TableRow extends Component {
  static contextType = EmpContext;
  render() {
    const [state, dispatch] = this.context;
    return state.data.map((item) => {
      return (
        <tr key={item.id} className="text-capitalize">
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: "SET_CURR_EMP", payload: item });
                dispatch({ type: "UPDATE_EDIT_MODE", payload: true });
              }}
              className="btn btn-link text-info"
            >
              Detials
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: "SET_CURR_EMP", payload: item });
                dispatch({ type: "UPDATE_EDIT_MODE", payload: false });
              }}
              className="btn btn-link text-warning"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: "DELETE_EMP", payload: item.id });
              }}
              className="btn btn-link text-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default DataTable;
