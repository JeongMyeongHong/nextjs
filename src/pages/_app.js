import AppLayout from "../components/AppLayout"
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Table>
      <thead>
      <Tr>
          <Th><AppLayout /></Th>
      </Tr>
      </thead>
      <tbody>
      <Tr>
          <Td><Component /></Td>
      </Tr>
      </tbody>
      </Table>
    </>
  )
}

export default MyApp


const Table = styled.table`
    border : 1px solid black;
    width : 700px;
    height : 100px;
    margin : auto;
`
const Tr = styled.tr`
    border : 1px dotted black;
`
const Th = styled.th`
    border : 10px solid black;
`
const Td = styled.td`
    border : 1px dotted black;
    height : 30px;
`