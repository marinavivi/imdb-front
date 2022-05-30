import * as Yup from "yup";

export const AddMovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(8, "Too Short!")
    .max(128, "Too Long!")
    .required("Required"),
  description: Yup.string().max(500, "Too Long!"),
  coverImage: Yup.mixed().required("Required"),
  genre: Yup.string(),
});
