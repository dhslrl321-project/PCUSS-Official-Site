import { useSelector } from "react-redux";

const useAuthentication = () => {
  const { authUser } = useSelector((state) => state.userReducer);
  return authUser;
};

export default useAuthentication;
