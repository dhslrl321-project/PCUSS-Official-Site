import Link from ".";

export default {
  title: "atoms / Link",
  component: Link
}

const Template = (args) => <Link {...args} />

export const NextLink = Template.bind({});
NextLink.args = {
  styleType: "NextLink",
  href: "#",
  children: "Home"
}