import { LIST_NOTES_DUMMY_DATA } from "components/constants";

const index = () => Promise.resolve(LIST_NOTES_DUMMY_DATA);

const notesApi = {
  index,
};

export default notesApi;
