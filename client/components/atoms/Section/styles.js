import styled from 'styled-components';
import { theme } from "styled-tools";


export const FirstMargin = styled.div`
    margin: ${theme("margin.firstSectionMargin")};
`;

export const LastMargin = styled.div`
    margin: ${theme("margin.lastSectionMargin")};
`;

export const DefaultMargin = styled.div`
    margin: ${theme("margin.sectionMargin")};
`;

export const SingleMargin = styled.div`
    margin: ${theme("margin.singleMargin")};
`;