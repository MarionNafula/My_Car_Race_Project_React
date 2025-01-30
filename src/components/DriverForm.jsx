import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addDriver } from "../api";

const DriverForm = ({ refreshDrivers }) => {
    return (
      <Formik
        initialValues={{ name: "", team: "", age: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          team: Yup.string().required("Team is required"),
          age: Yup.number().min(18, "Must be at least 18").required("Age is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          addDriver(values).then(refreshDrivers);
          resetForm();
        }}
      >
        <Form>
          <Field name="name" placeholder="Driver Name" />
          <ErrorMessage name="name" component="div" />
  
          <Field name="team" placeholder="Team" />
          <ErrorMessage name="team" component="div" />
  
          <Field name="age" type="number" placeholder="Age" />
          <ErrorMessage name="age" component="div" />
  
          <button type="submit">Add Driver</button>
        </Form>
      </Formik>
    );
  };
  
  export default DriverForm;

