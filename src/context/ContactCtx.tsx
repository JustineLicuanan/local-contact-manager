import { createContext, ReactNode, useState } from 'react';

// import { getLocalArrayData } from '../lib/getLocalArrayData';

export interface Contact {
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

const ContactCtx = createContext<IContactCtx>({} as IContactCtx);

export const ContactCtxProvider = ({ children }: Props) => {
	const [contacts, setContacts] = useState<Contact[]>(
		// getLocalArrayData('contacts')
		[
			{
				id: '1',
				name: 'John Doe',
				email: 'john.doe@gmail.com',
				number: '09223456789',
			},
			{
				id: '2',
				name: 'Coco Loco',
				email: 'coco.loco@gmail.com',
				number: '09223456780',
			},
			{
				id: '3',
				name: 'Bob Smith',
				email: 'bob.smith@gmail.com',
				number: '09223456781',
			},
		]
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
