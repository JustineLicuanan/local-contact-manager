import { ContactCtxProvider } from '../context/ContactCtx';
import Contacts from './Contacts';
import Copyright from './Copyright';

const App = () => {
	return (
		<ContactCtxProvider>
			<Contacts />
			<Copyright />
		</ContactCtxProvider>
	);
};

export default App;
