import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export function Search() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Faça sua pesquisa" />
      <Button variant="secondary">Pesquisar</Button>
      <div className="vr" />
    </Stack>
  );
}

