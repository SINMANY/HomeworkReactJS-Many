import React from "react"

import { Card } from "react-bootstrap"
import ButtonCard from "./ButtonCard"



const ProductCard = ({ product }) => {
    return ( <
        Card style = {
            { width: "18rem" } }
        className = "m-1" >
        <
        Card.Img variant = 'top'
        src = { product.images }
        /> <
        Card.Body >
        <
        Card.Title > { product.title } < /Card.Title> <
        h4 > $ { product.price } < /h4> <
        Card.Text > { product.description } < /Card.Text>


        <
        /Card.Body> <
        div className = "btn-group " >
        <
        ButtonCard styleBtn = { "btn btn-warning" }
        title = { "Buy now" }
        /> <
        ButtonCard styleBtn = { "btn btn-outline-warning" }
        title = { "Buy add to card" }
        /> <
        /div> <
        /Card>
    )
}

export default ProductCard