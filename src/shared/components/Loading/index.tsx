import { Spinner } from "react-bootstrap"
import { Div } from "./styles"

export function Loading() {
  return (
    <Div>
      <Spinner animation="border" style={{width: '200px', height: '200px'}} variant="primary" />
    </Div>
  )
}