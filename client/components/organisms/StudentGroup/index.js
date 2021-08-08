import * as S from "./styles";

import StudentCard from "../../molecules/StudentCard";

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
    </S.Container>
  );
};

export default StudentGroup;
