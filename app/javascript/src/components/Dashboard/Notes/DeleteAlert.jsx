import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteId,
  setSelectedNoteId,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy(selectedNoteId);
      Toastr.success("Successfully deleted note");
      onClose();
      setSelectedNoteId(null);
      refetch();
    } catch (error) {
      Toastr.error("Failed deleting note");
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to delete the note? This action cannot be undone."
      size="medium"
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
