import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

const ContainerCol = styled.div` 
  width: 50%;
  height: calc(100vh-58.5px);
  border-left: 2px black solid;

  text-align:left;
`
const Textarea = styled.div.attrs({
    className: "markdown",
})`
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
            <ReactMarkdown className="markdown">{props.text}</ReactMarkdown>
        </ContainerCol>
    )
}
