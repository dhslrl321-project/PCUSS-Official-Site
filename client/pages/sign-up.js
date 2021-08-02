import Section from "../components/atoms/Section";
import OAuth from "../components/sections/OAuth";

const signUp = () => {
  return (
    <>
      <Section styleType="SingleMargin">
        <OAuth styleType="SignUp" />
      </Section>
    </>
  );
};

export default signUp;
