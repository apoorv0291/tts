import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import '../Components/Container/TTS/tts.css';

const StyledBox = styled(Box)`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* ${({ hover }) =>
        hover ? 'transform: rotate(90deg);' : 'transform:unset;'} */
    /* ${({ hover }) =>
        hover ? 'transform: scale(2);' : 'transform:unset;'} */
    /* ${({ hover }) =>
        hover ? 'transform: translate(20px, 40px);' : 'transform:unset;'} */
    position: relative;

    ::after {
        content: 'After';
        background-color: red;
        position: absolute;
        width: 40px;
        height: 40px;
        top: 0px;
        left: 50%;
        transform: translate(-50%);
    }
`;

const StyledChild = styled(Box)`
    width: 50%;
    height: 40%;
    background-color: red;
    border: 1px solid black;

    .child:hover {
        transform: translate(100%);
    }
`;

const StyledParent = styled(Box)`
    width: 400px;
    height: 400px;
    background-color: green;
    .parent:hover {
        background: pink;
    }
`;

export default function Animation() {
    const [isHovered, setHovered] = useState(null);
    const handleMouseEnter = () => {
        // debugger;
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };
    const startAnimation = () => {
        let nodes = document.getElementsByClassName('heading');
        console.log('nodes', nodes);
        let spanNodes = [];
        for (let i = 0; i < nodes.length; i += 1) {
            console.log('NODE NODE::', nodes[i]);
            console.log('NODE NODE::', nodes[i].tagName);
            let headingNodes = document.createElement(nodes[i].tagName);
            console.log('dd0', nodes[i].innerText);
            const splitText = nodes[i].innerText.split(' ');
            console.log('Split text', splitText);
            headingNodes.style = 'opacity:1';
            for (
                let splitWords = 0;
                splitWords < splitText.length;
                splitWords += 1
            ) {
                const spanNode = document.createElement('span');
                const text = document.createTextNode(splitText[splitWords]);
                spanNode.appendChild(text);
                console.log('span node', spanNode);
                headingNodes.appendChild(spanNode);
                // spanNodes.push(spanNode);
            }
            spanNodes.push(headingNodes);
        }

        console.log('span ndoes', spanNodes);
        let totalNodes = 0;
        let delay = 0;
        for (let node = 0; node < spanNodes.length; node += 1) {
            let current = spanNodes[node];
            // console.log('current chidl', current.childNodes);
            const childrent = current.children;
            // console.log('Children', childrent);
            for (
                let currentSpan = 0;
                currentSpan < childrent.length;
                currentSpan += 1
            ) {
                console.log('churrent chuld node', childrent[currentSpan]);
                childrent[currentSpan].style = `animation: bringText ${
                    (totalNodes + 1) * 0.3
                }s ease ${delay}s forwards; animation-name:bringText;`;
                totalNodes += 1;
                delay = (totalNodes + 1) * 0.3;
            }

            console.log('current', current);
        }
        // console.log("")
        for (let node = 0; node < spanNodes.length; node += 1) {
            document.getElementById('text').appendChild(spanNodes[node]);
        }
    };
    return (
        <div onClick={startAnimation}>
            animation
            {/* <StyledBox
                w="100px"
                height="300px"
                bg="blue"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                hover={isHovered}
            >
                Box
            </StyledBox> */}
            {/* <StyledParent
                w="100px"
                height="300px"
                bg="blue"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                hover={isHovered}
                className="parent"
            >
                <StyledChild className="child">Child</StyledChild>
                {/* <StyledChild className="child">Child</StyledChild> */}
            {/* </StyledParent> */}
            <h1 className="heading">tis is a heading</h1>
            <h2 className="heading">Thisi is a h2 heading</h2>
            <h3 className="heading">Thisi is a h3 heading</h3>
            <h4 className="heading">Thisi is a h4 heading</h4>
            <h5 className="heading">Thisi is a h5 heading</h5>
            <h6 className="heading">Thisi is a h6 heading</h6>
            <p className="heading">Thisi is a p tag</p>
            {/* <p className="animate">Thisi is a second heading</p> */}
            <div id="text"></div>
        </div>
    );
}
