import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./Menubar";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.index();
      setNotes(data);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onEditActionClick = noteId => {
    logger.info(noteId);
  };

  const onDeleteActionClick = noteId => {
    setSelectedNoteIds([noteId]);
    setShowDeleteAlert(true);
  };

  const onMenuBarToggle = () => {
    setShowMenu(!showMenu);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuBar showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={onMenuBarToggle}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          notes.map(note => (
            <Card
              key={note.id}
              note={note}
              onDeleteActionClick={onDeleteActionClick}
              onEditActionClick={onEditActionClick}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
