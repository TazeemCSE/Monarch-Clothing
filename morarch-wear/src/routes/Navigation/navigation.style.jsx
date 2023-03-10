import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
background-color: #FFE7E5;
background-color:#0196C1;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  // padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
 padding: 10px 15px;
cursor: pointer;
color:white;
`;






// .navigation {
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;
//     background-color: #FFE7E5;
//     background-color:#0196C1;
  

  
//     .logo-container {
//       height: 100%;
//       width: 70px;
//       // padding: 25px;
//       // margin-bottom: 30px;
//     }
//     .logo{
//      padding-top: 10px;
//       padding-left: 20px;
//     }
  
//     .nav-links-container {
//       width: 50%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
//       margin-top: 10px;

  
//       .nav-link {
//         padding: 10px 15px;
//         cursor: pointer;
//         color:white;
//       }
//     }
//   }