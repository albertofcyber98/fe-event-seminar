import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { listen } from './redux/listener'
import { AppRoute } from './routes/index'

function App() {
  useEffect(() => {
    listen()
  }, [])
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
