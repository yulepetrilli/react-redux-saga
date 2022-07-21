//Components
import Main from './components/Main';

//Styles
import {Background, Container} from './App.styled';

function App() {
  return (
    <Background>
      <Container className='container'>
        <Main />
      </Container>
    </Background>
  );
}

export default App;
