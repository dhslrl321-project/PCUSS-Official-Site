import API from "../utils/api";

export const login = async (code) => {
  const { data } = await API.post(
    "/auth-resource-service/oauth/kakao",
    JSON.stringify(code)
  );
  return data;
};

// register

// silent-refresh

// logout
