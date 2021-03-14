import Container from '@material-ui/core/Container';

import { ContactCtxProvider } from '../context/ContactCtx';
import Contacts from './Contacts';
import Copyright from './Copyright';
import SearchBar from './SearchBar';
import Title from './Title';

const App = () => {
	return (
		<ContactCtxProvider>
			<Container>
				<Title />
				<SearchBar />
				<Contacts />
				<Copyright />
			</Container>
		</ContactCtxProvider>
	);
};

export default App;
