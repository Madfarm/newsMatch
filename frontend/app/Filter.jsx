"use client"


import { useCategoryContext } from "../utilities/categoryContext"

export default function Filter(props) {
    const { categoryState, setCategoryState } = useCategoryContext();

 

    function handleChange(e){
        setCategoryState(e.target.value)
    }

    return (
        <form>
            <select onChange={handleChange} value={categoryState}>
                <option value="all">all</option>
                <option value="regional">regional</option>
                <option value="lifestyle">lifestyle</option>
                <option value="business">business</option>
                <option value="general">general</option>
                <option value="programming">programming</option>
                <option value="science">science</option>
                <option value="entertainment">entertainment</option>
                <option value="world">world</option>
                <option value="sports">sports</option>
                <option value="finance">finance</option>
                <option value="academia">academia</option>
                <option value="politics">politics</option>
                <option value="health">health</option>
                <option value="opinion">opinion</option>
                <option value="food">food</option>
                <option value="game">game</option>
            </select>
        </form>
    )
}