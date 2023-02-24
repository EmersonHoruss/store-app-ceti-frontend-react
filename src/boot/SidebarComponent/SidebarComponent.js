import React from "react"
import "./SidebarComponent.css"
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from "react-router-dom";

export class SidebarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [
                {
                    text: "Principal",
                    icon: (<HomeIcon />),
                    path: "/"
                },
                {
                    text: "Producto",
                    icon: (<Inventory2Icon />),
                    path: "/productos"
                },
                {
                    text: "Venta",
                    icon: (<StorefrontIcon />),
                    path: "/ventas"
                }
            ]
        }
    }

    render() {
        return (
            <div className="options">
                {this.state.options.map((option, index) => {
                    return <Link
                        variant="outlined"
                        to={option.path}
                        type="button"
                        key={index}
                    >
                        {option.text}
                    </Link>
                })}
            </div>
        )
    }
}
