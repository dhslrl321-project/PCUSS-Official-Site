import Navigation from ".";

import { dropdownData } from "./data";

export default {
  title: "organisms / Navigation",
  component: Navigation
}

const Template = (args) => <Navigation {...args} />

export const Default = Template.bind({});
Default.args = {
  data: dropdownData
}