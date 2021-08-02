import * as S from "./styles";

import StudentCard from "../../molecules/StudentCard";

const StudentGroup = ({ data }) => {
  return (
    <S.Container>
      {data.map((student) => (
        <StudentCard
          key={student.studentId}
          studentId={student.studentId}
          studentName={student.name}
          totalNumber={student.totalNumber}
        />
      ))}
    </S.Container>
  );
};

export default StudentGroup;
