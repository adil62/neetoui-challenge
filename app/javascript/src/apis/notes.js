import { LIST_NOTES_DUMMY_DATA } from "components/constants";

const fetch = () => Promise.resolve(LIST_NOTES_DUMMY_DATA);
const destroy = selectedNoteIds => Promise.resolve(selectedNoteIds);

const notesApi = {
  fetch,
  destroy,
};

export default notesApi;
