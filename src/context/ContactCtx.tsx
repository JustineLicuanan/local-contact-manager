import { createContext, ReactNode, useState } from 'react';

import { getLocalArrayData } from '../lib/getLocalArrayData';

interface Contact {
	id: string;
	name: string;
	email: string;
	number?: string;
}

interface IContactCtx {
	addContact: (contact: Contact) => void;
	contacts: Contact[];
	deleteContact: (id: string) => void;
}

interface Props {
	children: ReactNode;
}

const ContactCtx = createContext<IContactCtx | undefined>(undefined);

export const ContactCtxProvider = ({ children }: Props) => {
	const [contacts, setContacts] = useState<Contact[]>(
		getLocalArrayData('contacts')
	);

	const value: IContactCtx = {
		contacts,
		addContact(contact) {
			const newContacts = [...contacts, contact];
			setContacts(newContacts);
		},
		deleteContact(id) {
			const newContacts = contacts.filter(
				({ id: contactId }) => contactId !== id
			);

			setContacts(newContacts);
		},
	};

	return <ContactCtx.Provider value={value}>{children}</ContactCtx.Provider>;
};

export default ContactCtx;
