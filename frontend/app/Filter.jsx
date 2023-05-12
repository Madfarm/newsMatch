"use client"

import { useState } from "react"

export default function Filter() {
    const [category, setCategory] = useState(undefined)

    function handleChange(e){
        setCategory(e.target.value)
        console.log(category)
    }

    return (
        <form>
            <select onChange={handleChange} value={category}>
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
            <input type="submit">Submit</input>
        </form>
    )
}