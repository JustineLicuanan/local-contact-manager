import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

import { Contact } from '../context/ContactCtx';

interface Props {
	contact: Contact;
}

const ContactItem = ({ contact }: Props) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<PersonIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={contact.name} secondary={contact.email} />
		</ListItem>
	);
};

export default ContactItem;
