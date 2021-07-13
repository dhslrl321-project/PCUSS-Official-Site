import API from "../utils/api";

export const silentRefresh = async () => {
  try {
    const { data } = await API.get("/user-service/auth/silent-refresh");
    return data;
  } catch {
    console.log("401 error, it is good no problem");
  }
};
