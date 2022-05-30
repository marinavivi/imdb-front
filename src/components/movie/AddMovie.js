import { AddMovieSchema } from "../../validations/movieValidation";
import { Formik, Form, Field } from "formik";

const AddMovie = ({ handleOnSubmit, genres }) => {
  return (
    <div>
      <h1>Add Movie</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          genre: "",
          coverImage: {},
        }}
        validationSchema={AddMovieSchema}
        onSubmit={(data) => {
          handleOnSubmit(data);
        }}
      >
        {({ errors, touched, setFieldValue }) => {
          return (
            <Form>
              <Field name="title" />
              {errors.title && touched.title && <div>{errors.title}</div>}
              <Field name="description" />
              {errors.description && touched.description && (
                <div>{errors.description}</div>
              )}
              <input
                id="coverImage"
                type="file"
                name="coverImage"
                onChange={(e) => setFieldValue("coverImage", e.target.files[0])}
              />
              {errors.coverImage && touched.coverImage && (
                <div>{errors.coverImage}</div>
              )}
              <Field as="select" name="genre">
                {genres.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </Field>
              {errors.genre && touched.genre && <div>{errors.genre}</div>}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default AddMovie;
