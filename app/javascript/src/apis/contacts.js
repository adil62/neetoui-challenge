import { LIST_CONTACTS_DUMMY_DATA } from "components/constants";

const fetch = () => Promise.resolve(LIST_CONTACTS_DUMMY_DATA);
const destroy = selectedContactId => Promise.resolve(selectedContactId);
const update = () => Promise.resolve(true);
const create = () => Promise.resolve(true);

const contactsApi = {
  fetch,
  destroy,
  update,
  create,
};

export default contactsApi;
