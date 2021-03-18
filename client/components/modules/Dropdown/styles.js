import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  /* background: #181818; */
  border-radius: 5px;
  transition: 1s ease;
  top: ${({ show }) => show ? "90%" : "60%"};
  opacity: ${({ show }) => show ? "1" : "0"};
  left: 18px;
  z-index: 1;
  height: 100px;
  width: 260px;
  line-height: 100%;
`;

export const NavColumn = styled.div`
  margin-left: 8px;
  height: 80px;

  :nth-child(2){ /* 두 번째 네비게이션 항목 마진*/
    margin-left: 25px;
  }

  :last-child {
    margin-left: 46px;
  }
`;

export const NavItem = styled.li`
  margin: 10px 0;
  list-style: none;
  font-size: 0.8rem;
`;