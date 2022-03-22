import Menu from "./nav/Menu";
import classes from "./Layout.module.css";


function Layouts(){
  return(
     <div className={classes.menu_div}>
       <div className={classes.menu_holder}>
       <Menu/>

      </div>
    </div>)
}

export default Layouts;