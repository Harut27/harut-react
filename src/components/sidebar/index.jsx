import React from "react";

const SideBar = props => {

    const sidebarMenu = ['test 1','test 2','test 3','test 4','test 5','test 6'];
    return(
        
            <div className="sitebarColumn">
                {
                    sidebarMenu.map((sitebarLink,index)=>{
                        return(
                            <div className={`sitebar-link sitebar-${sitebarLink.replace(/\s/g, '')}`}>{sitebarLink.toUpperCase()}</div>
                        )
                    })
                }
            </div>
        
    )
}




export default SideBar;