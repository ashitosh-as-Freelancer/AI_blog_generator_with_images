import '../components/LeftBar';
import LeftBar from '../components/LeftBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RightContent from '../components/RightContent';
import { MyContextProvider } from "../context/gptContext";

function App() {
  return (
    <MyContextProvider>
    <Container style={{maxWidth: "100%", minHeight: "100vh"}}>
       <Row>
         <RightContent/>
       </Row>
    </Container>
    </MyContextProvider>

  )
}

export default App
