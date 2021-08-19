import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

import Button from "../../atoms/Button";

import { loadMoreStudents } from "../../../reducer/student";

const MoreButton = () => {
  const dispatch = useDispatch();

  const { grade, last } = useSelector((state) => state.studentReducer);

  const [nowStudentId, setNowStudentId] = useState(17);

  let ref = useRef(1);

  const handleOnClickButton = () => {
    if (nowStudentId !== grade) {
      ref.current = 1;
    }

    dispatch(loadMoreStudents(grade, ref.current));
    setNowStudentId(grade);
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
