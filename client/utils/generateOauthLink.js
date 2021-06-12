export const generateOauthLink = (snsType) => {
  if (snsType === "Kakao") {
    const clientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
    const responseType = process.env.NEXT_PUBLIC_KAKAO_RESPONSE_TYPE;

    return `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
  } else if (snsType === "Naver") {
    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
    const responseType = process.env.NEXT_PUBLIC_NAVER_RESPONSE_TYPE;
    const state = process.env.NEXT_PUBLIC_NAVER_STATE;

    return `https://nid.naver.com/oauth2.0/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&state=${state}`;
  } else if (snsType === "Google") {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
    const responseType = process.env.NEXT_PUBLIC_GOOGLE_RESPONSE_TYPE;
    const scope = process.env.NEXT_PUBLIC_GOOGLE_SCOPE;

    return `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
  }
};
