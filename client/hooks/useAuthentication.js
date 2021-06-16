import { useSelector } from "react-redux";

const useAuthentication = () => {
  const { authUser } = useSelector((state) => state.userReducer);

  // todo useEffect �� sign in ���� ������ �ϵ���

  return authUser;
};

export default useAuthentication;
