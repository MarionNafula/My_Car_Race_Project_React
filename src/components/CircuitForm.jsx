import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCircuit } from "../api";

const CircuitForm = ({ refreshCircuits }) => {
  return (
    <Formik
      initialValues={{ name: "", location: "", length: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Circuit name is required"),
        location: Yup.string().required("Location is required"),
        length: Yup.number().min(1, "Length must be greater than 0").required("Length is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        addCircuit(values).then(refreshCircuits);
        resetForm();
      }}
    >
      <Form>
        <Field name="name" placeholder="Circuit Name" />
        <ErrorMessage name="name" component="div" />

        <Field name="location" placeholder="Location" />
        <ErrorMessage name="location" component="div" />

        <Field name="length" type="number" placeholder="Length (km)" />
        <ErrorMessage name="length" component="div" />

        <button type="submit">Add Circuit</button>
      </Form>
    </Formik>
  );
};

export default CircuitForm;