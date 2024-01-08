import SearchBar from './SearchBar';
import Col from 'react-bootstrap/Col';
import ContentBar from './ContentBar';
export default function RightContent() {
  return (
    <Col>
      <SearchBar/>
      <ContentBar/>
    </Col>
    
  )
}
