import Merit from '.';
import { headerData, cardData } from './data';

export default {
  title: "sections / Merit",
  component: Merit
};

const Template = (args) => <Merit {...args} />;

export const Rendering = Template.bind({});
Rendering.args = {
  headerData: headerData,
  cardData: cardData
}