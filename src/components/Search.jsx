// BONUS 8 / buscador

import { useState } from "react";
import { Form, Input } from 'antd';

function Search(props) {

    const [queryInput, setQueryInput] = useState("");

    // handler para disparar la query del buscador de alimentos
    const handleSearch = (e) => {
        setQueryInput(e.target.value)
        console.log("que busca el usuario? ", e.target.value)
        console.log("todos los alimentos: ", props.allFoods)

        const filteredArray = props.allFoods.filter((eachFood) => {

            const terminoBusqueda = e.target.value.toLowerCase();
            const foodName = eachFood.name.toLowerCase();

            if (foodName.includes(terminoBusqueda) === true) {
                return true
            } else {
                return false
            }
        })
        console.log(filteredArray)
        props.setFoodsRender(filteredArray)
    }


    return (
        <div className="box-buscador">
            <h2>Search</h2>
            <Form>

                <Form.Item
                    name="name"
                    value={queryInput}
                    onChange={handleSearch}
                >
                    <Input />
                </Form.Item>
            </Form>

        </div>
    )
}

export default Search