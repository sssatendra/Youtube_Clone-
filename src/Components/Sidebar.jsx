import React from 'react';
import SidebarRow from "./SidebarRow"
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import { ExpandMore, Explore, History, OndemandVideo, Subscriptions, ThumbUpOutlined, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={Explore} title="Explore" />
            <SidebarRow Icon={Whatshot} title="Trending" />
            <SidebarRow Icon={Subscriptions} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your videos" />
            <SidebarRow Icon={WatchLater} title="Watch Later" />
            <SidebarRow Icon={ThumbUpOutlined} title="Liked videos" />
            <SidebarRow Icon={ExpandMore} title="Show More" />
            <hr/>

        </div>
    )
}

export default Sidebar;
