import styled from "styled-components"


const ContainerCol = styled.div` 
  width: 50%;
  height: calc(100vh-58.5px);
`
const Textarea = styled.textarea`
height: 100%;
width:99%;
border:none;
border-right: 2px gray solid;
`
interface Props {
    text: string
    setText: Function
}

export default function MarkdownInput(props: Props) {
    return (
        <ContainerCol>
            <Textarea
                name="input"
                id="input"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}>
            </Textarea>
        </ContainerCol>
    )
}
