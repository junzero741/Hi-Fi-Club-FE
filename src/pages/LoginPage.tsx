import styled from "styled-components";
import { ReactComponent as Line } from "assets/images/Line_2.svg";
import API from "util/API";

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <ContentsWrapper>
        <Logo />
        <Line /> Login with Service Account <Line />
        <a href={API.kakaoOauthLogin()}>
          <LoginKakao />
        </a>
      </ContentsWrapper>
    </LoginPageLayout>
  );
};
export default LoginPage;

const ContentsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;

  span {
    font-size: 20px;
    font-family: "Nunito_Bold";
  }
`;

const LoginPageLayout = styled.div``;

const Logo = styled.div`
  width: 300px;
  height: 400px;
  background-image: url("/logoType_2.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const LoginKakao = styled.div`
  width: 150px;
  height: 200px;
  background-image: url("/kakao.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
