import { ContactCtxProvider } from '../context/ContactCtx';
import Contacts from './Contacts';
import Copyright from './Copyright';
import SearchBar from './SearchBar';

const App = () => {
	return (
		<ContactCtxProvider>
			<SearchBar />
			<Contacts />
			<Copyright />
		</ContactCtxProvider>
	);
};

export default App;
