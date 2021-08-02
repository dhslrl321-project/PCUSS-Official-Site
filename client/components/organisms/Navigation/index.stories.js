import Navigation from ".";

export default {
  title: "organisms / Navigation",
  component: Navigation,
};

const data = {
  dropdownData: [
    {
      id: 1,
      name: "������",
      href: "/professor",
      data: [
        { id: 1, name: "������", href: "/professor" },
        { id: 2, name: "�л���", href: "/#" },
        { id: 3, name: "������ ���ͺ�", href: "/interview" },
      ],
    },
    {
      id: 2,
      name: "Ȱ��",
      href: "/activity",
      data: [
        { id: 1, name: "��� �� Ȱ��", href: "/activity" },
        { id: 2, name: "���Ƹ�", href: "/club" },
      ],
    },
    {
      id: 3,
      name: "����",
      href: "/curriculum",
      data: [
        { id: 1, name: "Ŀ��ŧ��", href: "/curriculum" },
        { id: 2, name: "���� �� ����", href: "/carrer" },
        { id: 3, name: "������", href: "/lab" },
      ],
    },
    {
      id: 4,
      name: "Wargame",
      href: "/#",
      data: [
        { id: 1, name: "��� ���� Ǯ��", href: "/#" },
        { id: 2, name: "��ŷ", href: "/#" },
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
