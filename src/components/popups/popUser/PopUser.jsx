import { SWrapper, SName, SMail, SThemeButton, SThemeTitle, SThemeInput, SButtonWrapper } from "./PopUser.styled";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/ThemeContext";


export const PopUser = ({ setIsPopUserOpen, setIsActive }) => {
  const { user } = useContext(AuthContext);
  const userName = user.name;
  const userEmail = user.login;

  const { themeNameToSelect, toggleTheme } = useContext(ThemeContext);

  const handleLogoutClick = () => {
    setIsPopUserOpen(false);
    setIsActive(false);
  };


  return (
    <SWrapper id="user-set-target" >
      <SName>{userName}</SName>
      <SMail>{userEmail}</SMail>
      <SThemeButton>
        <SThemeTitle>{themeNameToSelect}</SThemeTitle>
        <SThemeInput
          type="checkbox"
          name="checkbox"
          onClick={toggleTheme}
        />
      </SThemeButton>
      <SButtonWrapper>
        <Link to="/exit" onClick={handleLogoutClick}>
          <Button text="Выйти" type="secondary" width="72px" disabled={false}></Button>
        </Link>
      </SButtonWrapper>
    </SWrapper>
  )
} 