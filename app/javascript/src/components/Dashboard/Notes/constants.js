import * as R from "ramda";
import * as yup from "yup";

export const CONTACTS = [
  { value: 1, label: "Ronald Richards" },
  { value: 2, label: "Jacob Jones" },
];

export const TAGS = [
  { value: 1, label: "Getting Started" },
  { value: 2, label: "Onboarding" },
  { value: 2, label: "User flow" },
  { value: 2, label: "Ux" },
  { value: 2, label: "Bugs" },
];

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(R.pluck("label", CONTACTS)),
      value: yup.number().oneOf(R.pluck("value", CONTACTS)),
    })
    .required("Contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(R.pluck("label", TAGS)),
        value: yup.number().oneOf(R.pluck("value", TAGS)),
      })
    )
    .min(1, "At least one tag should be selected"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
