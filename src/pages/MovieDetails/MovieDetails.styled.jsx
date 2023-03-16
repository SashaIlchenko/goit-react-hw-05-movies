import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
display: flex;
gap: 15px;
align-items: center;
margin: 15px 0;
 border-bottom: 1px solid black;`

export const Info = styled.div`
 border-bottom: 1px solid black;`

export const BackLink = styled(NavLink)`
display: block;
width: 100px;
height: 30px;
text-decoration: none;
text-align: center;
border-radius: 6px;
background-color: grey;
color: white;
padding: 8px 4px 4px 8px; 
&:focus, 
&:hover {
    background-color: orangered;
  }`