import { Component } from "react";
import styles from './Navbar.module.css';
// import styled from 'styled-components';

//Using css Modules

// Styled components must use correct CSS syntax with semicolons and units
// const Nav = styled.div`
//   width: 100%;
//   height: 70px;
//   background: linear-gradient(170deg,#1bc059,#0d47a1);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position:relative;
// `;


// //In this implementation of hover is shown 

// const Title = styled.div`
//   font-size: 30px;
//   color: #fff;
//   font-weight: 600;
//   font-family: 'Times New Roman', Times,  serif;
//   text-transform: uppercase;
//   margin-left: 20px;

//   &:hover{       
//   color:#0f0;
//   }
// `;

// const CartIconContainer = styled.div`
//   position: relative;
//   cursor: pointer;
// `;

// const CartImg = styled.img`
//   height: 48px;
//   margin-right: 20px;
// `;

// const CartCount = styled.div`
//   background: ${(props)=>props.color};
//   border-radius: 50%;
//   padding: 4px 8px;
//   position: absolute;
//   right: 10px;
//   top: -5px;
//   font-size: 12px;
//   visibility:${(props)=>props.show?"visible":"hidden"};
// `;

export default class Navbar extends Component {
    render() {
        return (
            <div className={styles.nav}> 
                <div className={styles.title}>My-App</div>
                <div className={styles.cartIconContainer}>
                    <img className={styles.cartImg} alt="Cart Icon" src="/images/shopping-cart.png" />
                    <div color="yellow" className={styles.cartCount}>3</div>
                </div>
            </div>
        );
    }
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