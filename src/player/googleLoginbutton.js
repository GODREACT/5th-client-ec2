import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { API_URL } from "../config/config";
import { useNavigate } from "react-router";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const clientId = '1087352918812-0sng7c0ne7imi2npab9fev8vj2ivvg16.apps.googleusercontent.com'
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          width={'350px'}
          height={'55px'}
          onSuccess={async (res) => {
            await axios.post(`${API_URL}/api/auth/googlelogin`, { token: res.credential }, { withCredentials: true })
              .then((result) => {
                console.log(res.status);
                if (result.status=200) {
                  // console.log('로그인성공!');
                  alert("로그인성공!");
                  // setCookie('loginCookie',res.email,{
                  //   path: '/',
                  //   secure: '/',
                  //   expires: new Date(Date.now() + setTime),
                  // });
                  window.location.replace("/app1")
                  // navigate('/');

                }
              })
              .catch((err) => {
                console.log(err);
              })
          }}
          onFailure={(err) => {
            console.log(err);
          }}
          useOneTap
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton