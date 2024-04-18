import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
  import { ToastContainer} from 'react-toastify';
	import 'react-toastify/dist/ReactToastify.css';

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	display: 'swap',
});

export const metadata = {
	title: 'quiz',
	description: 'quiz',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={rubik.className}>
				<Navbar />
				<div>{children}</div>
				<ToastContainer position='top-center'/>
			</body>
		</html>
	);
}
