import StudentCard from ".";

export default {
  title: "molecules / StudentCard",
  component: StudentCard,
};

export const Default = (args) => <StudentCard {...args} />;

Default.args = {
  studentId: "1684001",
  studentName: "홍길동",
  totalNumber: 2,
};
