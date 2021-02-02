import Hero from ".";

export default {
  title: "sections / Hero",
  component: Hero
}

const Template = (args) => <Hero {...args} />

export const Rendering = Template.bind({});
Rendering.args = {

}