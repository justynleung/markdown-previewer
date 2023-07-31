import styled from 'styled-components';
import Header from './Header'
import MarkdownGuide from './MarkdownGuide'
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';
import { useState } from 'react';

const ContainerCol = styled.div`
  width: 100vw;
  height: 100vh;
`

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height:100%;
`


export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);
    const [text, setText] = useState("");

    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <ContainerCol>
                {isOpen ? <MarkdownGuide /> : ""}
                <ContainerRow>
                    <MarkdownInput text={text} setText={(value: string) => setText(value)}></MarkdownInput>
                    <MarkdownOutput text={text}></MarkdownOutput>
                </ContainerRow>
            </ContainerCol>
        </>
    )
}
