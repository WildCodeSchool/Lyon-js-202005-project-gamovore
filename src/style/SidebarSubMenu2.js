import styled from "styled-components";

const SidebarSubMenu2 = styled.ul`
  display: ${(props) => (props.collapse ? "block" : "none")};
  padding: 0;
  list-style-type: none;
`;

export default SidebarSubMenu2;
