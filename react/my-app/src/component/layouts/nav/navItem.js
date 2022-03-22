import styles from './navItem.module.css';

function NavItem(props){
  return <li className={styles.menu_list}><a className={styles.menu_anchor}>{props.children}</a></li>
}

export default NavItem;