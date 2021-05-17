import ChatGroup from ".";

import { data } from "./data";

export default {
  title: "organisms / ChatGroup",
  component: ChatGroup
}

const Template = (args) => <ChatGroup {...args} />

export const ExporingGroup = Template.bind({});
ExporingGroup.args = {
  data: data[0]
}
export const PatienceGroup = Template.bind({});
PatienceGroup.args = {
  data: data[1]
}
export const ChallengeGroup = Template.bind({});
ChallengeGroup.args = {
  data: data[2]
}
export const CommunicationGroup = Template.bind({});
CommunicationGroup.args = {
  data: data[3]
}
export const PassionGroup = Template.bind({});
PassionGroup.args = {
  data: data[4]
}