// Your code here
// iteracion 2 y 3
// iteracion 4 > eliminar food de la lista

import { Card, Col, Row, Button, Space } from 'antd';
const { Meta } = Card;
import { v4 as uuidv4 } from 'uuid';

function FoodBox(props) {

    // eliminar comida
    const handleDeleteFood = (index) => {

        // clone array
        let clone = [...props.foodsRender]

        // método filter para quitar del array clonado el indice que le pasamos como argumento props
        clone = clone.filter(eachFood => eachFood.id !== index);

        // actualizamos el estado del render
        props.setFoodsRender(clone)
    }

    return (
        <div>
            <h2>Food List</h2>
            <Row gutter={16}>

                {props.foodsRender.length === 0 ? (
                    <p>Ooops! There is no more content to show.</p>
                ) : (
                    <>
                        {props.foodsRender.map((eachFood, i) => {
                            return (
                                <div key={uuidv4()} className="cards-foods">
                                    <Col span={8}>
                                        <Card
                                            hoverable
                                            style={{ width: 270 }}
                                            cover={<img alt={eachFood.name} src={eachFood.image} height="150px" />}
                                        >
                                            <Meta title={eachFood.name} />
                                            <p>Calories: {eachFood.calories}</p>
                                            <p>Servings {eachFood.servings}</p>
                                            <p>
                                                <b>Total Calories: {eachFood.calories * eachFood.servings}</b> kcal
                                            </p>
                                            <Button type="primary" danger onClick={() => handleDeleteFood(eachFood.id)}>
                                                Delete
                                            </Button>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })}
                    </>
                )}
            </Row>
        </div>
    )
}

export default FoodBox