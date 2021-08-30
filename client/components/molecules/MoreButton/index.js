import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

import Button from "../../atoms/Button";

import { loadMoreStudents } from "../../../reducer/student";

const MoreButton = () => {
  const dispatch = useDispatch();

  const { grade, last } = useSelector((state) => state.studentReducer);

  let ref = useRef(1);
  let refGrade = useRef(grade);

  useEffect(() => {
    refGrade.current = grade;
    ref.current = 1;
  }, [grade]);

  const handleOnClickButton = () => {
    if (refGrade.current !== grade) {
      ref.current = 1;
    }

    dispatch(loadMoreStudents(grade, ref.current));

    ref.current += 1;
  };

  if (!last) {
    return (
      <S.Container>
        <Button handleOnClick={handleOnClickButton}>더 보기</Button>
      </S.Container>
    );
  } else if (last) {
    return null;
  }
};

export default MoreButton;
