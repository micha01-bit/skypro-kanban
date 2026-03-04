import { SWrapper, SContainer, SBlock, SContent, STitle, SForm, SButtonWrapper } from "./PopExit.styled";
import { Button } from "../../button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


export const PopExit = () => {
  const { handleLogout } = useContext(AuthContext);


  const handleExit = (e) => {
    e.preventDefault();
    handleLogout();
  };


  return (
    <SWrapper>
      <SContainer>
        <SBlock>
          <SContent>
            <STitle>Выйти из аккаунта?</STitle>
            <SForm >
              <SButtonWrapper>
                <Button onClick={handleExit} width="153px" text="Да, выйти" type="primary" disabled={false}></Button>
                <Link to="/">
                  <Button width="153px" text="Нет, остаться" type="secondary" disabled={false}></Button>
                </Link>
              </SButtonWrapper>
            </SForm>
          </SContent>
        </SBlock>
      </SContainer>
    </SWrapper>
  )
}