import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check as CheckIcon } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA, TAGS, CONTACTS } from "../constants";

const Form = ({ onClose, refetch, note }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      await notesApi.create();
      refetch();
      onClose();
      Toastr.success("Note was created successfully");
    } catch (err) {
      logger.error(err);
      Toastr.error("Failed creating note");
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter note title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={3}
            />
            <Select
              isClearable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignedContact"
              options={CONTACTS}
              placeholder="Select Contact"
            />
            <Select
              isClearable
              isMulti
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAGS}
              placeholder="Select Tags"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={CheckIcon}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
