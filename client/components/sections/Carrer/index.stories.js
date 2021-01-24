import Carrer from ".";
import { headerData, carrerData, largeDescriptionData } from "./data";
export default {
  title: "sections / Carrer",
  component: Carrer
}

const Template = (args) => <Carrer {...args} />
export const Rendering = Template.bind({});
Rendering.args = {
  headerData,
  carrerData,
  largeDescriptionData
}