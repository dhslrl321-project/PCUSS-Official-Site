import styled from 'styled-components';

export const ExpandableNavItemContainer = styled.div`

`;

export const ExpandableNavItem = styled.div`
  width: 130px;
  position: relative;
  .item {
    background: ${({ show }) => show ? "gray" : "none"};
    height: ${({ show }) => show ? "40px" : "0px"};
    opacity: ${({ show }) => show ? "1" : "0"};
  }
`;