import { LIST_NOTES_DUMMY_DATA } from "components/constants";

const fetch = () => Promise.resolve(LIST_NOTES_DUMMY_DATA);
const destroy = selectedNoteIds => Promise.resolve(selectedNoteIds);
const update = () => Promise.resolve(true);
const create = () => Promise.resolve(true);

const notesApi = {
  fetch,
  destroy,
  update,
  create,
};

export default notesApi;
