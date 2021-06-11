import styled from "styled-components";
import { switchProp } from "styled-tools";

export const Container = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 10px;

  background: ${switchProp("snsType", {
    Kakao: "#fee500",
    Naver: "#03C75A",
    Google: "#ffffff",
  })};

  color: ${switchProp("snsType", {
    Kakao: "#000000",
    Naver: "#ffffff",
    Google: "#00000054",
  })};
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageColumn = styled.div`
  width: 30px;

  margin: 5px 10px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconColumn = styled.div`
  width: 20px;

  margin: 5px 10px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
`;

export const LabelColumn = styled.div`
  font-weight: bold;
`;
