import styled from "styled-components";
import { applyStyleModifiers} from "styled-components-modifiers"
import { defaultTheme, typeScale, PRIMARY_FONT } from "../../theme";


const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    circular: () => `
        border-radius: 10px;
        padding: 4px 4px;
        margin: 0px 5px;
    `,
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 4px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    font-family: ${PRIMARY_FONT};
    transition: all 0.2s ease-out;
    margin: 5px;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: white;
    }

    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.primaryColorActive};
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: 1px solid  ${defaultTheme.primaryColor};;
    color: white;

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS) as any}
`;

const SecondaryButton = styled(Button)`
    background: #21aa891c;
    border: 2px solid ${defaultTheme.primaryColor};
    color:  ${defaultTheme.primaryColor};

    &:disabled {
        background-color: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS) as any}
`;

export { Button, PrimaryButton, SecondaryButton}