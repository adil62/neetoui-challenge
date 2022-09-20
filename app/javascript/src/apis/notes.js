import { LIST_NOTES_DUMMY_DATA } from "components/constants";

const index = () => Promise.resolve(LIST_NOTES_DUMMY_DATA);
const destroy = () => Promise.resolve(true);

const notesApi = {
  index,
  destroy,
};

export default notesApi;
