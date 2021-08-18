import * as S from "./styles";

import StudentCard from "../../molecules/StudentCard";
import MoreButton from "../../molecules/MoreButton";

const StudentGroup = ({ data }) => {
  return (
    <S.Container>
      {data.map((student, index) => (
        <StudentCard
          key={index}
          studentId={student.studentId}
          studentName={student.name}
          totalNumber={student.totalNumber}
        />
      ))}
      <S.ButtonWrapper>
        <MoreButton />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default StudentGroup;
