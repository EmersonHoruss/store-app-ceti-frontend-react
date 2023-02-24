import React from "react"
import "./BootComponent.css"
import { Outlet } from "react-router-dom";
import { SidebarComponent } from "../SidebarComponent/SidebarComponent";

export class BootComponent extends React.Component {
    render() {
        return (
            <div className="page-layout">
                <div className="sidebar"><SidebarComponent /></div>
                <div className="main-content"><Outlet /></div>
            </div>
        )
    }
}
