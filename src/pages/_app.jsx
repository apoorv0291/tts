/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react';
// import '../app/styles/globals.css';
// import '../app/styles/styles.css';
import SimpleLayout from '../layout/SimpleLayout';
// import Cookies from 'js-cookie';

// const useProtectedHook = (isProtected) => {
//   const { accessToken } = Cookies.get() || {};
//   if (isProtected && !accessToken) {
//     if (typeof window !== 'undefined') window.location.replace('/');
//   }
// };

function MyApp({ Component, pageProps }) {
    // console.log('In my app', Component.layout);
    const Layout = Component.layout || SimpleLayout;
    const removeHeader = Component.removeHeader;
    const removeSideNav = Component.removeSideNav;
    //   const isProtected = Component.isProtected;

    // useProtectedHook(isProtected);
    // if (Component.cssLibrary === 'flowbite')
    // return (
    //     <>
    //         <NavBar />
    //         <Component {...pageProps} />
    //     </>
    // );
    return (
        // <ChakraProvider>
        <Layout removeHeader={removeHeader} removeSideNav={removeSideNav}>
            <Component {...pageProps} />
        </Layout>
        // </ChakraProvider>
    );
}

export default MyApp;
