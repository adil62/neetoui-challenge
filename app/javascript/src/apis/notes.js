import { LIST_NOTES_DUMMY_DATA } from "components/constants";

const fetch = () => Promise.resolve(LIST_NOTES_DUMMY_DATA);

const notesApi = {
  fetch,
};

export default notesApi;
