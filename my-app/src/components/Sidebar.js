import React from "react";
import css from "./css/Sidebar.module.css"

function Sidebar() {
    return <div className={css.sidebar}>
        <a href="#" target="_blank">My Photos</a>
        <a href="#" target="_blank">My Illustratiions</a>
        <a href="#" target="_blank">My Paintings</a>
    </div>
}

export default Sidebar;