import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check as CheckIcon } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import contactsApi from "apis/contacts";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLES } from "../constants";

const Form = ({ onClose, refetch, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      await contactsApi.create();
      refetch();
      onClose();
      Toastr.success("Contact added successfully.");
    } catch (err) {
      logger.error(err);
      Toastr.error("Failed creating contact.");
    }
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="grid w-full grid-cols-2 gap-3">
              <Input
                required
                className="flex-grow-0"
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                className="flex-grow-0"
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              isClearable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
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
