import { ContactCtxProvider } from '../context/ContactCtx';
import Contacts from './Contacts';
import Copyright from './Copyright';
import SearchBar from './SearchBar';
import Title from './Title';

const App = () => {
	return (
		<ContactCtxProvider>
			<Title />
			<SearchBar />
			<Contacts />
			<Copyright />
		</ContactCtxProvider>
	);
};

export default App;
