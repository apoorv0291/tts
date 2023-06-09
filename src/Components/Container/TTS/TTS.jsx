import React, { useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaPlay, FaCirclePlay } from 'react-icons/fa';
import './tts.css';

const Wrapper = styled(Box)`
    /* background-color: pink; */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
`;

const Overlay = styled(Box)`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// let i = 0
// const startAnimating = (elemId) => {
//     let arr = [];
//     for (let y = 0; y < elemId.length; y += 1) {
//         const words = document.getElementById(elemId[y]).childNodes;
//         arr = [...arr, ...words];
//     }

//     console.log('words', arr);
//     for (let i = 0; i < arr.length; i += 1) {
//         const word = arr[i];
//         word.style =
//             'animation: fadeIn ease-out 1s both; animation-delay: ' +
//             i * 0.2 +
//             's';
//         // console.log(word);
//     }
// };

const startAnimation = () => {
    let nodes = document.getElementsByClassName('heading');
    console.log('nodes', nodes);
    console.log('nodes', nodes);
    let spanNodes = [];
    for (let i = 0; i < nodes.length; i += 1) {
        // debugger;
        // console.log('NODE NODE::', nodes[i]);
        console.log('NODE NODE::tagname', nodes[i].tagName);
        // console.log('NODE NODE::aat', nodes[i].attributes);
        // if ()
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
        headingNodes.setAttribute('style', headingNodes.getAttribute('style'));
        // debugger;
        spanNodes.push(headingNodes);
    }
    console.log('span nodes', spanNodes);
    const recursiveDIV = document.getElementById('recursion');
    console.log('recursive div', recursiveDIV);
    // debugger;
    for (let node = 0; node < spanNodes.length; node += 1) {
        // debugger;
        recursiveDIV.appendChild(spanNodes[node]);
    }
};
let newTotalNodes = 0;
let newDelay = 0;
let animationDuration = 0.55;
function visitChildren(el, recursive) {
    if (!el) {
        return null;
    }
    if (el.children.length === 0) {
        // debugger;
        console.log('CHIDREN IMG::000', el.tagName, el.children);

        const ele = document.createElement(el.tagName);
        let splitText = [];
        if (el.innerText) {
            splitText = el.innerText.split(' ');
        }
        console.log('HIDREN IMG::000:Split text', splitText);
        console.log('HIDREN IMG::000:SplitinnerText', el.innerText);
        // ele.style = 'opacity:1';
        if (el.tagName === 'ASIDE') {
            debugger;
            ele.style = `animation: callOutAnimation ${animationDuration}s ease ${newDelay}s forwards; animation-name:callOutAnimation;`;
        } else if (el.tagName === 'IMG')
            ele.style = `animation: imageAnimation .1s ease ${newDelay}s forwards; animation-name:imageAnimation;`;
        else
            ele.style = `animation: changeOpactiyTo1 ${animationDuration}s ease ${newDelay}s forwards; animation-name:changeOpactiyTo1;`;
        if (splitText.length === 0 && el.tagName === 'IMG') {
            newTotalNodes += 1;
            newDelay = (newTotalNodes + 1) * animationDuration;
        }

        for (
            let splitWords = 0;
            splitWords < splitText.length;
            splitWords += 1
        ) {
            const spanNode = document.createElement('span');
            const text = document.createTextNode(splitText[splitWords] + ' ');
            spanNode.appendChild(text);
            // console.log('span node', spanNode);
            spanNode.style = `animation: bringText ${animationDuration}s ease ${newDelay}s forwards; animation-name:bringText;`;
            newTotalNodes += 1;
            newDelay = (newTotalNodes + 1) * animationDuration;
            ele.appendChild(spanNode);
            console.log('ELE node', ele);
            // debugger;
            // spanNodes.push(spanNode);
        }

        return ele;
    }
    const ele = document.createElement(el.tagName);
    const tagName = el.tagName;
    console.log('CHIDREN IMG', el.tagName, el.children);

    let parentDelay = newDelay;
    let parentNodeTime = newTotalNodes;
    for (var i = 0; i < el.children.length; i += 1) {
        // debugger;
        console.log('child', el.children[i]);
        if (recursive) {
            const element = visitChildren(el.children[i], recursive);
            // debugger;
            ele.appendChild(element);
        }
        // debugger;
    }
    if (tagName === 'ASIDE') {
        debugger;
        ele.style = `animation: callOutAnimation ${animationDuration}s ease ${parentDelay}s forwards; animation-name:callOutAnimation;`;
        debugger;
    } else
        ele.style = `animation: changeOpactiyTo1 ${animationDuration}s ease ${parentDelay}s forwards; animation-name:changeOpactiyTo1;`;
    newTotalNodes += 1;
    newDelay = (newTotalNodes + 1) * animationDuration;

    return ele;
}

export default function TTS() {
    const [isPlaying, setPlaying] = useState(null);
    const ref = useRef();
    const playAudio = () => {
        // debugger;
        // document.getElementById('main-container').style.filter = 'unset';
        if (!isPlaying) ref.current.play();
        else ref.current.pause();
        ref.current.play();
        setPlaying(!isPlaying);
        // startAnimating([
        //     'indus-valley-civilization-chronology',
        //     'hakra-pottery-and-related-artifacts',
        //     '33',
        // ]);
        startAnimation();
        // startAnimating('hakra-pottery-and-related-artifacts');
    };
    return (
        <>
            {!isPlaying && (
                <Overlay onClick={playAudio} className="overlay">
                    <FaPlay size="56px" color="white" />
                </Overlay>
            )}
            <Wrapper>
                <audio
                    controls
                    source
                    // src="https://d2zn4hspiuleph.cloudfront.net/media-content/TEST_UID/ssml_text_and_image.mp3"
                    src="ivc-demo.mp3"
                    type="audio/ogg"
                    autoPlay
                    ref={ref}
                ></audio>
                {/* <audio
                controls
                src="https://d2zn4hspiuleph.cloudfront.net/media-content/TEST_UID/ssml_text_and_image.mp3"
            >
                Download audio
            </audio> */}

                <div id="container">
                    <h1
                        id="indus-valley-civilization-chronology"
                        className="heading"
                    >
                        IndusValley Civilization - Chronology
                    </h1>
                    <h2
                        id="hakra-pottery-and-related-artifacts"
                        className="heading"
                    >
                        Hakra pottery and related artifacts
                    </h2>
                    <img
                        src="Hakra_Pottery.png"
                        alt="Screenshot 2023-05-05 at 2.44.56 PM.png"
                        className="heading"
                    />
                    <ul className="heading">
                        <li id="33">
                            Hakra pottery was produced during the early phase of
                            Harappan Civilization
                        </li>
                        <li>
                            It is characterized by its red slip and painted
                            designs.
                        </li>
                        <li>
                            Hakra Pottery has been found at various Harappan
                            sites, including Kunal, Dholavira, Bhirrana, Girwas,
                            Farmana and Rakhigarhi.
                        </li>
                    </ul>
                    <ul className="heading">
                        <li>
                            Evidence of stone, wheat, bone, and shell working,
                            as well as indirect knowledge of copper smelting
                            technology, suggests advanced technological
                            knowledge.
                        </li>
                        <li>
                            Handmade pottery and other artifacts provide insight
                            into the daily lives and cultural practices of the
                            Harappan people.
                        </li>
                    </ul>
                    <Box p="4px" className="heading">
                        <aside>
                            💡 The presence of Hakra Pottery at different
                            Harappan sites indicates that there was a shared
                            cultural tradition across the region.
                        </aside>
                    </Box>

                    <h2
                        id="the-late-harappan-phase-emergence-of-regional-culture"
                        className="heading"
                    >
                        The Late Harappan Phase -Emergence of Regional Culture
                    </h2>
                    <p>
                        <img
                            src="Late-Harappan.png"
                            alt="Screenshot 2023-05-05 at 2.50.06 PM.png"
                            className="heading"
                        />
                    </p>
                    <ul className="heading">
                        <li>
                            Migration led to the dispersal of Harappan culture
                            across regions.
                        </li>
                        <li>
                            The Cemetery H and Jhukar cultures emerged as
                            distinct entities.
                        </li>
                        <li>
                            Some notable sites associated with this period
                            include:
                            <ol>
                                <li>Daimabad (Maharashtra)</li>
                                <li>Lothal (Gujarat)</li>
                                <li>Pirak (Balochistan)</li>
                                <li>Sutkagen Dor (Makran coast, Pakistan)</li>
                            </ol>
                        </li>
                        <li>
                            These regional cultures preserved certain Harappan
                            lifestyle aspects.
                        </li>
                        <li>
                            They also integrated new cultural elements within
                            their traditions.
                        </li>
                        <li>
                            Such transformations highlight the evolving dynamics
                            of that historical period.
                        </li>
                    </ul>
                    <Box p="4px" className="heading">
                        <aside>
                            💡 The transition from urban centers to rural
                            settlements during the Late Harappan phase.
                        </aside>
                    </Box>

                    <Box p="4px" className="heading">
                        <aside>
                            💡
                            <ol>
                                <li>
                                    The impact of climate change and shifting
                                    river courses on the decline of urban
                                    centers.
                                </li>

                                <li>
                                    The role of trade and interaction with
                                    neighbouring cultures in shaping regional
                                    cultures.
                                </li>

                                <li>
                                    The continuity of craftsmanship and artistic
                                    traditions from the Mature Harappan phase.
                                </li>
                            </ol>
                        </aside>
                    </Box>

                    <h2 id="conclusion" className="heading">
                        Conclusion
                    </h2>
                    <p className="heading">
                        <img
                            src="Conclusion.png"
                            alt="Screenshot 2023-05-05 at 2.58.09 PM.png"
                            className="heading"
                        />
                    </p>
                    <ul className="heading">
                        <li>
                            The civilization offers invaluable insights into
                            ancient urban life.
                        </li>
                        <li>
                            It aids our understanding of the Indian
                            subcontinent&#39;s cultural development.
                        </li>
                        <li>
                            The study helps us comprehend the origins of modern
                            society.
                        </li>
                        <li>
                            The Indus Valley Civilization contributes to our
                            shared human heritage.
                        </li>
                        <li>
                            Its city planning connects with today&#39;s Smart
                            City projects.
                        </li>
                    </ul>
                    <aside className="heading">
                        💡
                        <ol>
                            <li>
                                The Harappan Civilization is considered a
                                crucial part of the world&#39;s history.
                            </li>
                            <li>
                                Its influence can be seen in subsequent cultures
                                and societies in the Indian subcontinent.
                            </li>
                            <li>
                                The study of this civilization helps debunk
                                colonial narratives and highlights the
                                achievements of ancient non-European
                                civilizations.
                            </li>
                        </ol>
                    </aside>
                </div>
                <div id="recursion"></div>
            </Wrapper>
        </>
    );
}
