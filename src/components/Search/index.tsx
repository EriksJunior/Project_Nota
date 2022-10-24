import { Button, Form, Stack } from 'react-bootstrap';

export function Search() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Faça sua pesquisa" />
      <Button variant="secondary">Pesquisar</Button>
      <div className="vr" />
    </Stack>
  );
}

