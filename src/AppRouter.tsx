import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AccountPage from './pages/AccountPage/AccountPage';
import UserDetail from './pages/UserDetail/UserDetail';
import UserPage from './pages/UserPage/UserPage';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:idx" element={<UserDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
