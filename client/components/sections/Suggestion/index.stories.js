import Suggestion from ".";
import { data } from "./data";

export default {
  title: "sections / Suggestion",
  component: Suggestion
}

const Template = (args) => <Suggestion {...args} />

export const Rendering = Template.bind({});
Rendering.args = {
  data,
}