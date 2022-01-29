import { Container } from './components/Container/index';
import { AppRouter } from './routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
        <GlobalStyle/>
      </Container>
    </>
  );
}

export default App;
