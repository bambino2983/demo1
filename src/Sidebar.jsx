import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.jsx";
import TrendingIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";

function Sidebar({Icon, title}) {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={TrendingIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
        </div>
    )
}

export default Sidebar
