import Button from "./Button";

export default {
  title: "Portfolio/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});

BasicButton.args = {
  label: "Basic Button",
};
