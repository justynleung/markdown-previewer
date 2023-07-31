import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  width: 100vw;
  height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #282C34;
`
const Title = styled.h1`
    color: white; 
    font-size: 2.5rem;  
    margin-left: 1rem;
`

const Button = styled.button`
    background-color: red;  
    width: max-content;
    margin-right: 1rem;

`
interface Props {
    isOpen: Boolean
    setIsOpen: Function
}

export default function Header(props: Props) {
    return (
        <Nav >
            <Title>Markdown Previewer</Title>
            <Button onClick={() => props.setIsOpen(!props.isOpen)}>Markdown cheat sheet</Button>
        </Nav>

    )
}
