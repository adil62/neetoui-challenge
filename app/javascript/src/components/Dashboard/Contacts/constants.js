import * as R from "ramda";
import * as yup from "yup";

export const ROLES = [
  { value: 1, label: "Owner" },
  { value: 2, label: "Developer" },
];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(R.pluck("label", ROLES)),
      value: yup.number().oneOf(R.pluck("value", ROLES)),
    })
    .required("Role is required"),
});
