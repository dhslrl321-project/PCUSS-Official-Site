import useAuthentication from "../hooks/useAuthentication";

const withAuthentication = (Component) => {
  const Template = (props) => {
    const user = useAuthentication();

    if (!user) {
      console.log("사용자가 리덕스 스토어에 존재하지 않음");
      // location.herf = "/sign-in"
    } else {
      console.log("사용자가 리덕스 스토어에 존재함!!!");
    }

    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return Template;
};

export default withAuthentication;
