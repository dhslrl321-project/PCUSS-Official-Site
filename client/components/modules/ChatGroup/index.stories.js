import ChatGroup from ".";
import { data } from "./data";
export default {
  title: "modules / ChatGroup",
  component: ChatGroup
}

const Template = (args) => <ChatGroup {...args} />

export const ExporingGroupRendering = Template.bind({});
ExporingGroupRendering.args = {
  data: data[0]
}
export const PatienceGroupRendering = Template.bind({});
PatienceGroupRendering.args = {
  data: data[1]
}
export const ChallengeGroupRendering = Template.bind({});
ChallengeGroupRendering.args = {
  data: data[2]
}
export const CommunicationGroupRendering = Template.bind({});
CommunicationGroupRendering.args = {
  data: data[3]
}
export const PassionGroupRendering = Template.bind({});
PassionGroupRendering.args = {
  data: data[4]
}