import React from "react";
import { Component } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { EmpContext } from "../contexts/EmpContext";

class EmpForm extends Component {
  static contextType = EmpContext;
  validationSchema = () => {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      designation: Yup.string().required("Designation is required"),
      salary: Yup.number()
        .required("Please enter valid Salary number format")
        .positive("Please enter positive number")
        .min(1, "Salary can not be less than 1"),
    });
  };
  onSubmitForm(values, dispatch) {
    dispatch({
      type: "ADD_EMP",
      payload: {
        id: values.id,
        name: values.name,
        designation: values.designation,
        salary: values.salary,
      },
    });
    dispatch({
      type: "RESET_CURR_EMP",
      payload: {
        id: new Date().getTime(),
        name: "",
        designation: "",
        salary: "",
      },
    });
  }
  render() {
    const [state, dispatch] = this.context;
    return (
      <Formik
        enableReinitialize={true}
        initialValues={state.selEmp}
        onSubmit={(values) => this.onSubmitForm(values, dispatch)}
        validationSchema={this.validationSchema()}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3 form-group">
              <label htmlFor="">ID</label>
              <Field
                className="form-control"
                id="id"
                name="id"
                placeholder="Enter Id"
                readOnly
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="id">Name</label>
              <Field
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Name"
                readOnly={state.isReadOnly}
              />
              {errors.name && touched.name && (
                <div className="text-danger">{errors.name}</div>
              )}
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="designation">Designation</label>
              <Field
                className="form-control"
                id="designation"
                name="designation"
                placeholder="Enter Designation"
                readOnly={state.isReadOnly}
              />
              {errors.designation && touched.designation && (
                <div className="text-danger">{errors.designation}</div>
              )}
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="salary">Salary</label>
              <Field
                className="form-control"
                id="salary"
                name="salary"
                placeholder="Enter salary"
                readOnly={state.isReadOnly}
              />
              {errors.salary && touched.salary && (
                <div className="text-danger">{errors.salary}</div>
              )}
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary w-25 ms-5"
                type="button"
                onClick={() => {
                  dispatch({
                    type: "RESET_CURR_EMP",
                    payload: {
                      id: new Date().getTime(),
                      name: "",
                      designation: "",
                      salary: "",
                    },
                  });
                  dispatch({
                    type: "UPDATE_EDIT_MODE",
                    payload: false,
                  });
                }}
              >
                Reset
              </button>
              <button className="btn btn-success w-25" type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default EmpForm;
