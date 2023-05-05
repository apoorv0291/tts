import React from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import './tts.css';

const Wrapper = styled(Box)`
    background-color: pink;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
`;

export default function TTS() {
    return (
        <Wrapper>
            <audio
                controls
                source
                src="https://d2zn4hspiuleph.cloudfront.net/media-content/TEST_UID/ssml_text_and_image.mp3"
                type="audio/ogg"
                autoPlay
            ></audio>
            {/* <audio
                controls
                src="https://d2zn4hspiuleph.cloudfront.net/media-content/TEST_UID/ssml_text_and_image.mp3"
            >
                Download audio
            </audio> */}
            <h1 id="indus-valley-civilization-chronology">
                Indus Valley Civilization - Chronology
            </h1>
            <h2 id="hakra-pottery-and-related-artifacts">
                Hakra pottery and related artifacts
            </h2>
            <ul>
                <li>
                    Hakra pottery was produced during the early phase of
                    Harappan Civilization
                </li>
                <li>
                    It is characterized by its red slip and painted designs.
                </li>
                <li>
                    Hakra Pottery has been found at various Harappan sites,
                    including Kunal, Dholavira, Bhirrana, Girwas, Farmana and
                    Rakhigarhi.
                </li>
            </ul>
            <p>
                <img
                    src="Hakra_Pottery.png"
                    alt="Screenshot 2023-05-05 at 2.44.56 PM.png"
                />
            </p>
            <ul>
                <li>
                    Evidence of stone, wheat, bone, and shell working, as well
                    as indirect knowledge of copper smelting technology,
                    suggests advanced technological knowledge.
                </li>
                <li>
                    Handmade pottery and other artifacts provide insight into
                    the daily lives and cultural practices of the Harappan
                    people.
                </li>
            </ul>
            <aside>
                💡 The presence of Hakra Pottery at different Harappan sites
                indicates that there was a shared cultural tradition across the
                region.
            </aside>

            <h2 id="the-late-harappan-phase-emergence-of-regional-culture">
                The Late Harappan Phase -Emergence of Regional Culture
            </h2>
            <p>
                <img
                    src="Late-Harappan.png"
                    alt="Screenshot 2023-05-05 at 2.50.06 PM.png"
                />
            </p>
            <ul>
                <li>
                    Migration led to the dispersal of Harappan culture across
                    regions.
                </li>
                <li>
                    The Cemetery H and Jhukar cultures emerged as distinct
                    entities.
                </li>
                <li>
                    Some notable sites associated with this period include:
                    <ol>
                        <li>Daimabad (Maharashtra)</li>
                        <li>Lothal (Gujarat)</li>
                        <li>Pirak (Balochistan)</li>
                        <li>Sutkagen Dor (Makran coast, Pakistan)</li>
                    </ol>
                </li>
                <li>
                    These regional cultures preserved certain Harappan lifestyle
                    aspects.
                </li>
                <li>
                    They also integrated new cultural elements within their
                    traditions.
                </li>
                <li>
                    Such transformations highlight the evolving dynamics of that
                    historical period.
                </li>
            </ul>
            <aside>
                💡 The transition from urban centers to rural settlements during
                the Late Harappan phase.
            </aside>

            <aside>
                💡
                <ol>
                    <li>
                        The impact of climate change and shifting river courses
                        on the decline of urban centers.
                    </li>

                    <li>
                        The role of trade and interaction with neighbouring
                        cultures in shaping regional cultures.
                    </li>

                    <li>
                        The continuity of craftsmanship and artistic traditions
                        from the Mature Harappan phase.
                    </li>
                </ol>
            </aside>

            <h2 id="conclusion">Conclusion</h2>
            <p>
                <img
                    src="Conclusion.png"
                    alt="Screenshot 2023-05-05 at 2.58.09 PM.png"
                />
            </p>
            <ul>
                <li>
                    The civilization offers invaluable insights into ancient
                    urban life.
                </li>
                <li>
                    It aids our understanding of the Indian subcontinent&#39;s
                    cultural development.
                </li>
                <li>
                    The study helps us comprehend the origins of modern society.
                </li>
                <li>
                    The Indus Valley Civilization contributes to our shared
                    human heritage.
                </li>
                <li>
                    Its city planning connects with today&#39;s Smart City
                    projects.
                </li>
            </ul>
            <aside>
                💡
                <ol>
                    <li>
                        The Harappan Civilization is considered a crucial part
                        of the world&#39;s history.
                    </li>
                    <li>
                        Its influence can be seen in subsequent cultures and
                        societies in the Indian subcontinent.
                    </li>
                    <li>
                        The study of this civilization helps debunk colonial
                        narratives and highlights the achievements of ancient
                        non-European civilizations.
                    </li>
                </ol>
            </aside>
        </Wrapper>
    );
}
