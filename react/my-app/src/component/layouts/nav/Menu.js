import NavItem from "./navItem";

import classes from "./Menu.module.css";


function Menu(){
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu_list}>
        <NavItem>Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>About</NavItem>
      </ul>
    </nav>
  )
}

export default Menu;