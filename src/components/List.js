import {Card, Col, Row} from 'react-bootstrap';
import CocktailService from '../services/cocktail'
import { useEffect, useState } from 'react';

function List({onShow}) {
    let cocktails = new CocktailService()
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const [cocktlist, setCocktlist] = useState([])

    useEffect( () => {
        updateList('a')
    }, [] )

    function updateList(l) {
        cocktails.byFirstLetter(l).then(arr => setCocktlist(arr))
    }

    return (
        <div>
            <div className="lttrs mb-3">
                {letters.split('').map( (l,i) => <span className='bg-light size rounded-circle' onClick={ () => { updateList(l) } } key={i}><b>{l.toUpperCase()}</b></span> )}
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {cocktlist.map((obj, i) => {
                    let {cat, name, img, desc } = obj
                    return (<Col key={i}>
                        <Card>
                            <Card.Img onClick={ () => { onShow(obj) } } variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name} (<small>{cat}</small>)</Card.Title>
                                <Card.Text className="dotted">{desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                )}
                </Row>
        </div>
    )
}

export default List