/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
// import Header from './Header';

const FullDiv = styled(Box)`
    width: 400px;
    display: flex;
    justify-content: center;
    margin: auto;
    position: relative;
    background-color: pink;
    height: 800px;
`;

export default function SimpleLayout({ children }) {
    return (
        <FullDiv bg="orange.100">
            {/* <Header /> */}
            {children}
        </FullDiv>
    );
}
