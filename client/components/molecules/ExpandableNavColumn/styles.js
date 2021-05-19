import styled from 'styled-components';

export const ExpandableNavItemContainer = styled.div`
  /* width: 100px; */
`;

export const ExpandableNavItem = styled.div`
  position: relative;
  padding: 40px 70px 40px 0px;
  .item-wrapper {
    opacity: ${({ show }) => show ? "1" : "0"};
    background: #2D333B;
    border-radius: 10px;
  }
  .item {
    height: ${({ show }) => show ? "30px" : "0px"};
    opacity: ${({ show }) => show ? "1" : "0"};
  }
`;