import { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';

import ContactItem from './ContactItem';
import ContactCtx from '../context/ContactCtx';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
	});
});

const Contacts = () => {
	const classes = useStyles();
	const { contacts } = useContext(ContactCtx);

	return (
		<Box display='flex' justifyContent='center'>
			<List className={classes.root}>
				{contacts.map((contact: any) => (
					<ContactItem key={contact.id} contact={contact} />
				))}
			</List>
		</Box>
	);
};

export default Contacts;
