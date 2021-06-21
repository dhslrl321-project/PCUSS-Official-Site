import API from "../utils/api";

export const silentRefresh = async () => {
  const { data } = await API.get("/user-service/auth/silent-refresh");
  return data;
};
