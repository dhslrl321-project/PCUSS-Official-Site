import { useSelector } from "react-redux";

import * as S from "./styles";

import StudentCard from "../../molecules/StudentCard";
import MoreButton from "../../molecules/MoreButton";

const StudentGroup = ({ handleSeeMoreButtonClick }) => {
  const { students } = useSelector((state) => state.studentReducer);

  return (
    <S.Container>
      {students.map((student) => (
        <StudentCard
          key={student.studentId}
          studentId={student.studentId}
          studentName={student.name}
          totalNumber={student.totalNumber}
          handleSeeMoreButtonClick={handleSeeMoreButtonClick}
        />
      ))}
      <S.ButtonWrapper>
        <MoreButton />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default StudentGroup;
