import { Route, Routes } from 'react-router-dom';
import RegisterSection from './sections/users-login-signin/Register';
import LoginSection from './sections/users-login-signin/login';
import LoadingScreen from './sections/onBoardPages/Loading-screen';
import HomeSection from './sections/HomeSection/HomeSection';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />

        <Route path="/register" element={<RegisterSection />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/home" element={<HomeSection />} />
        <Route path="*" element={<h2>No Such Page </h2>} />
      </Routes>
    </div>
  );
};

export default App;
