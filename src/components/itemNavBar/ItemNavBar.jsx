
import { NavLink } from "react-router-dom"

export const ItemNavBar = ({ content, styles, route }) => {
  return (
    <li>
      <NavLink className={styles} to={route}>{content}</NavLink>
    </li>
  )
}
