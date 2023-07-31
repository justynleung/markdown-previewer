import styled from "styled-components";

const Title = styled.h3`
margin-left:2rem;
`
const Container = styled.div`
  display: block;
  margin: 1rem;
  width: 97vw;
  height: fit-content;
  text-align: left;
  border: 2px gray solid;
  background-color:transparent;
`
export default function MarkdownGuide() {
    return (
        <Container>
            <Title>Markdown Cheat Sheet</Title>
            <ul>
                <li># H1</li>
                <li>## H2</li>
                <li>### H3</li>
                <li>**bold**</li>
                <li>*italic*</li>
                <li>[Link](http://a.com)</li>
                <li>![Image](http://url/a.png)</li>
                <li>`inline code`</li>
                <li>```block code```</li>
                <li>- list item</li>
            </ul>
        </Container>
    )
}
