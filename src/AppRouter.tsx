import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AccountPage from './pages/AccountPage/AccountPage';
import UserPage from './pages/UserPage/UserPage';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
