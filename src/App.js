import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import Routes from './Routes';



function App() {
	return (
		<>
			<BrowserRouter>
				
					<Header />
					<Routes />
					<Footer />
					<ToastContainer />
				
			</BrowserRouter>
		</>
	);
}

export default App;
