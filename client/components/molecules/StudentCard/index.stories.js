import StudentCard from ".";

export default {
  title: "molecules / StudentCard",
  component: StudentCard,
};

export const Default = (args) => <StudentCard {...args} />;

const data = {
  content: [
    {
      studentId: "1684001",
      name: "홍길동",
      totalNumber: 2,
    },
  ],
};
Default.args = {
  data,
};
