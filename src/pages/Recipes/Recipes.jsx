import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipes = () => {
    const { id } = useParams()
    const [chefData, setChefData] = useState()
    // console.log(id)

    useEffect(() => {
        fetch(`http://localhost:5000/chefData/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data.item))
    }, [])
    // console.log(chefData.recipes[0])
    return (
        <div>
            <h3>This is recipe page</h3>
            {/* {
                chefData.recipes[0].map(recipe =>{
                    console.log(recipe)
                })
            } */}
        </div>
    );
};

export default Recipes;