import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

const ContainerCol = styled.div` 
  width: 50%;
  height: calc(100vh-58.5px);
  border-left: 2px black solid;

  text-align:left;
`

const Wrapper = styled.div`
    height: 100%;
    width:99%;
    border:none;
    background-color: purple;
`

interface Props {
    text: string
}

export default function MarkdownOutput(props: Props) {
    return (
        <ContainerCol>
            <Wrapper>
                <ReactMarkdown>{props.text}</ReactMarkdown>
            </Wrapper>
        </ContainerCol>
    )
}
