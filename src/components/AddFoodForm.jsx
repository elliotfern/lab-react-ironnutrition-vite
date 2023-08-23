import { useState } from "react"
import { Button, Form, Input } from 'antd';

// Your code here
// iteracion 5

function AddFoodForm(props) {

    // estados para controlar los inputs del formulario
    const [nameInput, setNameInput] = useState("")

    const [imageInput, setImageInput] = useState("")

    const [caloriesInput, setCaloriesInput] = useState("")

    const [servingsInput, setServingsInput] = useState("")

    // los handles de cada input
    const handleNameChange = (e) => {
        setNameInput(e.target.value)
    }

    const handleImageChange = (e) => {
        setImageInput(e.target.value)
    }

    const handleCaloriesChange = (e) => {
        setCaloriesInput(e.target.value)
    }

    const handleServingsChange = (e) => {
        setServingsInput(e.target.value)
    }

    // handle con toda la logica del submit button
    const handleSubmitForm = (e) => {
        e.preventDefault()

        if (nameInput === "" || imageInput === "" || caloriesInput === 0 || servingsInput === 0) {
            return
        }

        // array con la nueva data
        let newFood = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }

        let clone = [...props.allFoods]
        clone.unshift(newFood)

        // añadimos al estado original
        props.setAllFoods(clone)

        // añadimos al estado de la visualizacion
        props.setFoodsRender(clone)
    }

    return (
        <div className="form-add">
            <h2>Add food entry</h2>

            <Form>

                <Form.Item
                    name="name"
                    label="Name of food"
                    value={nameInput}
                    onChange={handleNameChange}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Image URL"
                    value={imageInput}
                    onChange={handleImageChange}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="calories"
                    label="Calories"
                    value={caloriesInput}
                    onChange={handleCaloriesChange}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="servings"
                    label="Servings"
                    value={servingsInput}
                    onChange={handleServingsChange}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit" onClick={handleSubmitForm}>
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default AddFoodForm