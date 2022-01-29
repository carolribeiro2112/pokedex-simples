import { AppRouter } from './routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      <GlobalStyle/>      
    </>
  );
}

export default App;
