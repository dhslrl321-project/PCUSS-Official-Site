import Qualification from ".";
import { headerData, chatData, chatLabels } from "./data";
export default {
  title: "sections / Qualification",
  component: Qualification
}

const Template = (args) => <Qualification {...args} />

export const Rendering = Template.bind({});
Rendering.args = {
  headerData,
  chatData,
  chatLabels
}