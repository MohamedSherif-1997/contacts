import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";

import { PHONE_NUMBER, EMAIL_ID } from "../constants/string";

const styles = {
  inputFeild: {
    width: "250px",
    height: "20px",
    padding: "10px",
    border: "none",
    textDecoration: "none",
  },
  formFeild: {
    padding: "10px",
  },
  error: {
    color: "red",
    fontSize: "15px",
    paddingTop: "10px",
  },
  saveButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    padding: "0 30px",
  },
};

function AddContactForm(props) {
  const { classes, addContact } = props;
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email_id: "",
          name: "",
          phone_number: "+91",
          date: new Date(Date.now()).toDateString(),
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name is  Required";
          }
          if (!values.phone_number.length > 3) {
            errors.phone_number = "Phone Number is  Required";
          } else if (!values.phone_number.match(PHONE_NUMBER)) {
            errors.phone_number = "Enter a Valid Number";
          }
          if (values.email_id && !EMAIL_ID.test(values.email_id)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addContact(values);
            setSubmitting(true);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.formFeild}>
              <input
                type="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={classes.inputFeild}
              />
              <div className={classes.error}>
                {errors.name && touched.name && errors.name}
              </div>
            </div>

            <div className={classes.formFeild}>
              <input
                type="phoneNumber"
                name="phone_number"
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone_number}
                className={classes.inputFeild}
              />
              <div className={classes.error}>
                {errors.phone_number &&
                  touched.phone_number &&
                  errors.phone_number}
              </div>
            </div>
            <div className={classes.formFeild}>
              <input
                type="email"
                name="email_id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email_id}
                className={classes.inputFeild}
                placeholder="Email (optional)"
              />

              <div className={classes.error}>
                {errors.email_id && touched.email_id && errors.email_id}
              </div>
            </div>
            <Button
              type="primary"
              onClick={handleSubmit}
              className={classes.saveButton}
            >
              save
            </Button>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
}

AddContactForm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AddContactForm);
