import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';
import AuthPage from './pages/AuthPage/AuthPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
