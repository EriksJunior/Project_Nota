import { Stack } from 'react-bootstrap';
interface ISearchComponent {
  children: JSX.Element[] | JSX.Element
}

export function Search({ children }: ISearchComponent) {
  return (
    <Stack direction="horizontal" gap={3}>
      {children}
      <div className="vr" />
    </Stack>
  );
}

