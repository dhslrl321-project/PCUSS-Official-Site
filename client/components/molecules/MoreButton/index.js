import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

import Button from "../../atoms/Button";

import { loadAppendStudent, setLast } from "../../../reducer/student";
import store from "../../../reducer";

const MoreButton = () => {
  const dispatch = useDispatch();

  const { id, last } = useSelector((state) => state.studentReducer);

  const [nowStudentId, setNowStudentId] = useState(17);

  let ref = useRef(1);

  const handleOnClickButton = () => {
    if (nowStudentId !== id) {
      ref.current = 1;
    }

    dispatch(loadAppendStudent(id, ref.current));
    setNowStudentId(id);
    ref.current += 1;
  };

  if (last === false) {
    return (
      <S.Container>
        <Button handleOnClick={handleOnClickButton}>더 보기</Button>
      </S.Container>
    );
  } else if (last === true) {
    return null;
  }
};

export default MoreButton;
