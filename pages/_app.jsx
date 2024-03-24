import '../styles/globals.css';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';
const noAuthRequired = [
  '/',
   '/admin',
   '/secbtn/[id]',
   '/secbtn',
   '/firstbtn',
   '/firstbtn/ethiopia',
   '/firstbtn/india',
   '/firstbtn/indonosia',
   '/firstbtn/phippines',
   '/firstbtn/SriLanka',
   '/firstbtn/[id]',
   '/about',
   '/communication',
   '/info',
   '/offer',
   '/ourpost',
   '/price',
  ];
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (<AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (<Component {...pageProps}/>) : (<ProtectedRoute>
          <Component {...pageProps}/>
        </ProtectedRoute>)}
    </AuthContextProvider>);
}
export default MyApp;
