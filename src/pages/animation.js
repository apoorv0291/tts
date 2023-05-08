import React, { useEffect, useState } from 'react';
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
            console.log('NODE NODE::aat', nodes[i].attributes);

            let headingNodes = document.createElement(nodes[i].tagName);
            console.log(
                'nodes[i].getAttributeNames()',
                nodes[i].getAttributeNames()
            );
            const attrs = nodes[i].getAttributeNames().reduce((acc, name) => {
                return { ...acc, [name]: nodes[i].getAttribute(name) };
            }, {});
            console.log('attrs', attrs);
            for (var key in attrs) {
                console.log('keyattrs', key, attrs[key]);
                headingNodes.setAttribute(key, attrs[key]);
            }
            console.log('headingNodes', headingNodes);
            console.log('dd0', nodes[i].innerText);
            const splitText = nodes[i].innerText.split(' ');
            console.log('Split text', splitText);
            headingNodes.setAttribute(
                'style',
                headingNodes.getAttribute('style') + ';opacity:1;'
            );
            // headingNodes.style = 'opacity:1';
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

    const startAnimation2 = () => {
        let nodes = document.getElementsByClassName('heading');
        console.log('nodes', nodes);
        console.log('nodes', nodes);
        let spanNodes = [];
        for (let i = 0; i < nodes.length; i += 1) {
            debugger;
            console.log('NODE NODE::', nodes[i]);
            console.log('NODE NODE::', nodes[i].tagName);
            console.log('NODE NODE::aat', nodes[i].attributes);

            let headingNodes = document.createElement(nodes[i].tagName);
            // let headingNodes = null;
            console.log(
                'nodes[i].getAttributeNames()',
                nodes[i].getAttributeNames()
            );
            const attrs = nodes[i].getAttributeNames().reduce((acc, name) => {
                return { ...acc, [name]: nodes[i].getAttribute(name) };
            }, {});
            console.log('attrs', attrs);

            console.log('headingNodes', headingNodes);
            headingNodes = visitChildren(nodes[i], true);
            for (var key in attrs) {
                console.log('keyattrs', key, attrs[key]);
                headingNodes.setAttribute(key, attrs[key]);
            }
            headingNodes.setAttribute(
                'style',
                headingNodes.getAttribute('style') + ';opacity:1;'
            );
            debugger;
            spanNodes.push(headingNodes);
        }
        console.log('span nodes', spanNodes);
        const recursiveDIV = document.getElementById('recursion');
        console.log('recursive div', recursiveDIV);
        debugger;
        for (let node = 0; node < spanNodes.length; node += 1) {
            debugger;
            recursiveDIV.appendChild(spanNodes[node]);
        }
    };
    let newTotalNodes = 0;
    let newDelay = 0;
    function visitChildren(el, recursive) {
        if (!el) {
            return null;
        }
        if (el.children.length === 0) {
            debugger;
            const ele = document.createElement(el.tagName);
            const splitText = el.innerText.split(' ');
            console.log('Split text', splitText);
            // ele.style = 'opacity:1';
            ele.style = `animation: changeOpactiyTo1 ${
                (newTotalNodes + 1) * 0.3
            }s ease ${newDelay}s forwards; animation-name:changeOpactiyTo1;`;
            for (
                let splitWords = 0;
                splitWords < splitText.length;
                splitWords += 1
            ) {
                const spanNode = document.createElement('span');
                const text = document.createTextNode(
                    splitText[splitWords] + ' '
                );
                spanNode.appendChild(text);
                // console.log('span node', spanNode);
                spanNode.style = `animation: bringText ${
                    (newTotalNodes + 1) * 0.3
                }s ease ${newDelay}s forwards; animation-name:bringText;`;
                newTotalNodes += 1;
                newDelay = (newTotalNodes + 1) * 0.3;
                ele.appendChild(spanNode);
                console.log('ELE node', ele);
                debugger;
                // spanNodes.push(spanNode);
            }
            return ele;
        }
        const ele = document.createElement(el.tagName);
        for (var i = 0; i < el.children.length; i += 1) {
            debugger;
            console.log('child', el.children[i]);
            if (recursive) {
                const element = visitChildren(el.children[i], recursive);
                debugger;
                ele.appendChild(element);
            }
            debugger;
        }
        return ele;
    }
    const allChildNodes = () => {
        const parenntNode = document.getElementById('parent');
        console.log('allChildNodes', parenntNode);
        const childNodes = parenntNode.children;
        visitChildren(parenntNode, true);
        // for (let child = 0; child < childNodes.length; child += 1) {
        //     while (childNodes[child].tagName) {}
        // }
    };
    useEffect(() => {
        // allChildNodes();
        startAnimation2();
    }, []);
    return (
        // <div onClick={startAnimation}>
        <div>
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
            <h1 className="heading" style={{ background: 'green' }}>
                tis is a heading
            </h1>
            <h1 className="heading">tis is a heading</h1>
            <h2 className="heading">Thisi is a h2 heading</h2>
            <h3 className="heading">Thisi is a h3 heading</h3>
            <h4 className="heading">Thisi is a h4 heading</h4>
            <h5 className="heading">Thisi is a h5 heading</h5>
            <h6 className="heading">Thisi is a h6 heading</h6>
            <p className="heading">Thisi is a p tag</p>
            <ul className="heading">
                <li>Aooo</li>
                <li>Booo</li>
                <li>Cooo</li>
            </ul>
            {/* <p className="animate">Thisi is a second heading</p> */}
            <div id="text"></div>
            <div id="recursion"></div>
        </div>
    );
}
