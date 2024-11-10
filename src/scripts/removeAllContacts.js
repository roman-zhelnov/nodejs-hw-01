import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      await writeContacts([]);
    }
    return;
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
