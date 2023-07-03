import { Routes, Route } from 'react-router-dom';
import { Chat, Home, Login, Signup, Welcome, Onboarding } from './pages/';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </>
  );
};

export default App;
