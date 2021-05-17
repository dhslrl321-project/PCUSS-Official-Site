import ExpandableNavColumn from ".";

export default {
  title: "molecules / ExpandableNavColumn",
  component: ExpandableNavColumn
}

const data = {
  id: 1,
  name: "활동",
  data: [
    { id: 1, name: "행사 및 활동" },
    { id: 2, name: "동아리" },
  ]
}

const Template = (args) => <ExpandableNavColumn {...args} />

export const Default = Template.bind({});
Default.args = {
  data
}