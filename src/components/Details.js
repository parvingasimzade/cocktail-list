import React from 'react'
import { Card, Offcanvas } from 'react-bootstrap'

function Details({show, onHide, obj} ) {
    let {cat, sub, name, img, glass, desc, ingr=[]} = obj
    return (
        <Offcanvas className='bg-image' show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cocktail Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p className="card-title">{cat}: {sub}</p>
                        <small className="text-body-secondary">Glass: {glass}</small>
                        <ul>
                            {ingr.map( (ing, i) => <li key={i}>{ing}</li>) }
                        </ul>
                        <Card.Text >{desc}</Card.Text>
                    </Card.Body>
                </Card>
            </Offcanvas.Body>

        </Offcanvas>
    )
}

export default Details