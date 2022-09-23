import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

import contactsApi from "apis/contacts";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedContactId,
  setSelectedContactId,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await contactsApi.destroy(selectedContactId);
      Toastr.success("Successfully deleted contact");
      onClose();
      setSelectedContactId(null);
      refetch();
    } catch (error) {
      Toastr.error("Failed deleting contact");
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to delete this contact? This action cannot be undone."
      size="medium"
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
