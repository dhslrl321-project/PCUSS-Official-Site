import API from "../utils/api";

export const login = async (code) => {
  const { data } = await API.post(
    "/auth-resource-service/oauth/kakao",
    JSON.stringify(code)
  );
  return data;
};

export const logout = async () => {
  const { data } = await API.get("/user-service/auth/logout");
  return data;
};
// register
