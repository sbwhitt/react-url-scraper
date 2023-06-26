import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function Scrape() {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const handleScrape = (url: string) => {
    axios.get('http://localhost:4000/api/scrape', {
      params: { url: url }
    }).then(res => setBody(res.data));
  }
  
  return (
    <Container className='url-input'>
      <Form>
        <InputGroup>
          <InputGroup.Text>Url</InputGroup.Text>
          <Form.Control type='text' onChange={e => setUrl(e.target.value)} />
          <Button id='button-addon' onClick={() => {handleScrape(url)}}>scrape</Button>
        </InputGroup>
      </Form>
      <hr />
      <p>{body}</p>
    </Container>
  );
}
