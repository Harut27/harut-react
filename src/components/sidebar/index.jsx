import React from "react";
import { Link } from "react-router-dom";


const SideBar = props => {

    const sidebarMenu = ['test 1','test 2','test 3','test 4','test 5','test 6'];
    return (
        
        <div className="sitebarColumn">
            {
                sidebarMenu.map((sitebarLink,index)=>{
                    return(
                        <div className={`sitebar-link sitebar-${sitebarLink.replace(/\s/g, '')}`} key={index}>
                            <Link to={}>
                                {sitebarLink.toUpperCase()}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        
    )
}


export default SideBar;