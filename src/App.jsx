import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeMain from './components/HomeMain';
import Account from './components/Account';
import Thanks from './components/Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/account" element={<Account />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
