import { createGlobalStyle } from 'styled-components';

import CoFoSansMedium from './fonts/CoFoSans-Medium.woff';
import CoFoSansMedium2 from './fonts/CoFoSans-Medium.woff2';
import CoFoSansRegular from './fonts/CoFoSans-Regular.woff';
import CoFoSansRegular2 from './fonts/CoFoSans-Regular.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "CoFo Sans Regular", sans-serif;
        src: url(${CoFoSansRegular2}) format("woff2"), url(${CoFoSansRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "CoFo Sans Medium", sans-serif;
        src: url(${CoFoSansMedium2}) format("woff2"), url(${CoFoSansMedium}) format("woff");
        font-weight: 500;
        font-style: normal;
    }
`;

export default FontStyles;
