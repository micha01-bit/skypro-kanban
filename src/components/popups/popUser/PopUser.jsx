import {
  SWrapper,
  SName,
  SMail,
  SThemeButton,
  SThemeTitle,
  SThemeInput,
  SButtonWrapper,
} from "./PopUser.styled";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export const PopUser = ({ setIsPopUserOpen }) => {
  const { user } = useContext(AuthContext);
  const userName = user.name;
  const userEmail = user.login;

  const handleLogoutClick = () => {
    setIsPopUserOpen(false);
  };

  return (
    <SWrapper id="user-set-target">
      <SName>{userName}</SName>
      <SMail>{userEmail}</SMail>
      <SThemeButton>
        <SThemeTitle>Темная тема</SThemeTitle>
        <SThemeInput type="checkbox" name="checkbox" />
      </SThemeButton>
      <SButtonWrapper>
        <Link to="/exit" onClick={handleLogoutClick}>
          <Button
            text="Выйти"
            type="secondary"
            width="72px"
            disabled={false}
          ></Button>
        </Link>
      </SButtonWrapper>
    </SWrapper>
  );
};
