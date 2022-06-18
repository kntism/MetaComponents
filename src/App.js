import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

function App() {
  return (
    <Container className="grid">
      <Header />
    </Container>
  );
}

export default App;