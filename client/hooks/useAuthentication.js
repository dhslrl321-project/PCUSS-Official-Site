import { useSelector } from "react-redux";

const useAuthentication = () => {
  const { authUser } = useSelector((state) => state.userReducer);

  // todo useEffect 가 sign in 으로 렌더링 하도록

  return authUser;
};

export default useAuthentication;
