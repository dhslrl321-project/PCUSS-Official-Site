import Section from "../components/atoms/Section";
import OAuth from "../components/sections/OAuth";

const signIn = () => {
  return (
    <>
      <Section styleType="SingleMargin">
        <OAuth styleType="SignIn" />
      </Section>
    </>
  );
};

export default signIn;
