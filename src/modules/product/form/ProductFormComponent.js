import React from "react"
import "./ProductFormComponent.css"
import { Form } from "react-router-dom";

export class ProductFormComponent extends React.Component {
    render() {
        return (
            <Form method="post">

                <button type="submit">Save</button>
            </Form>
        )
    }
}
