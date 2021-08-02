import Navigation from ".";

export default {
  title: "organisms / Navigation",
  component: Navigation,
};

const data = {
  dropdownData: [
    {
      id: 1,
      name: "구성원",
      href: "/professor",
      data: [
        { id: 1, name: "교수진", href: "/professor" },
        { id: 2, name: "학생들", href: "/#" },
        { id: 3, name: "선배의 인터뷰", href: "/interview" },
      ],
    },
    {
      id: 2,
      name: "활동",
      href: "/activity",
      data: [
        { id: 1, name: "행사 및 활동", href: "/activity" },
        { id: 2, name: "동아리", href: "/club" },
      ],
    },
    {
      id: 3,
      name: "교육",
      href: "/curriculum",
      data: [
        { id: 1, name: "커리큘럼", href: "/curriculum" },
        { id: 2, name: "졸업 후 진로", href: "/carrer" },
        { id: 3, name: "연구실", href: "/lab" },
      ],
    },
    {
      id: 4,
      name: "Wargame",
      href: "/#",
      data: [
        { id: 1, name: "모든 문제 풀기", href: "/#" },
        { id: 2, name: "랭킹", href: "/#" },
      ],
    },
  ],
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
};

export const Annonymous = Template.bind({});
Annonymous.args = {
  data,
  user: null,
};

export const User = Template.bind({});
User.args = {
  data,
  user: {},
};
