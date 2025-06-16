

import styled from 'styled-components';

// Styled components must use correct CSS syntax with semicolons and units
const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg,#1bc059,#0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:relative;
`;


//In this implementation of hover is shown 

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: 'Times New Roman', Times,  serif;
  text-transform: uppercase;
  margin-left: 20px;

  &:hover{       
  color:#0f0;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.div`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility:${(props) => props.show ? "visible" : "hidden"};
`;

export default function Navbar(props) {



  const { cartCount } = props;
  //console.log(count)
  let show = false;
  if (cartCount > 0) {
    show = true;
  }
  return (
    <Nav>
      <Title>My-App</Title>
      <CartIconContainer>
        <CartImg alt="Cart Icon" src="/images/shopping-cart.png" />
        <CartCount color="yellow" show={true}>{cartCount}</CartCount>
      </CartIconContainer>
    </Nav>
  );
}



// const styles = {
//     cartIcon: {
// height: 48,
// marginRight: 20,
//     },
//     nav: {
// width: "100%",
// height: 70,
// background: "#4267b2",
// display: "flex",
// justifyContent: "space-between"

//     },
//     title: {
// fontSize: 30,
// color: "#fff",
// fontWeight: 600,
// fontFamily: '"Montserrat", sans-serif',
// textTransform: "uppercase",
// marginLeft: 20
//     }, cartIconContainer: {
// position: "relative",
// cursor: "pointer",
//     },
//     cartCount: {
// background: "orange",
// borderRadius: "50%",
// padding: "4px 8px",
// position: "absolute",
// right: 10,
// top: -5,
// fontSize: 12,
//     },
// }