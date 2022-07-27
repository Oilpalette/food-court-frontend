import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser } from '@fortawesome/free-solid-svg-icons';


export const NavContainer = styled.nav`
    width: 100vw;
    height: 60px;

    display: flex;
    justify-content: space-between;
`;

export const Btns = styled.section`
    
`

export const NavBtn = styled(Link)`
`;

export const Logo = styled.image`
    
`

export const UserBtn = styled(FontAwesomeIcon)`

`;

export default function Nav() {
 

  return (
    <NavContainer>
        <NavBtn to="/">
            <Logo />
            홈버튼   
        </NavBtn>
        <Btns>
            <NavBtn to="/calendar">
              {/* 월별통계 */}
              <UserBtn icon={faChartBar} />
            </NavBtn>
            <NavBtn to="/mypage">
              {/* 마이페이지 */}
              <UserBtn icon={faUser} />
            </NavBtn>
        </Btns>
    </NavContainer>
  );
}