import styled, { createGlobalStyle } from "styled-components";
import { PRIMARY_FONT, typeScale } from "./typography";


export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    @media screen and (max-width: 991px) {
        font-size: 13px;
    }
}

body {
    font-family: ${PRIMARY_FONT};

}`;
