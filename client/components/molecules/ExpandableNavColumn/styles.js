import styled from 'styled-components';

export const ExpandableNavItemContainer = styled.div`
`;

export const ExpandableNavItem = styled.div`
  width: 100px;
  position: relative;
  .item {
    height: ${({ show }) => show ? "30px" : "0px"};
    opacity: ${({ show }) => show ? "1" : "0"};  
  }
`;