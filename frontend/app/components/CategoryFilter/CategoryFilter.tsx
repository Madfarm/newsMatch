"use client"

import styles from './CategoryFilter.module.css'
import { useCategoryContext } from "../../../utilities/categoryContext"


export default function CategoryFilter(props) {
    const { categoryState, setCategoryState} = useCategoryContext();
    

    function handleChange(e){
        setCategoryState(e.target.value)
    }
    
    return (
        <form className={styles.form}>
            <label className={styles.label}>Categories</label>
            <select className={styles.selector} onChange={handleChange} value={categoryState}>
                {/* {Object.keys(validCategories).map((key) => {
                    <option value={key}>{key}</option>
                })} */}
                <option value="all">All</option>
                <option value="regional">Regional</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
                <option value="general">General</option>
                <option value="programming">Programming</option>
                <option value="science">Science</option>
                <option value="entertainment">Entertainment</option>
                <option value="world">World</option>
                <option value="sports">Sports</option>
                <option value="finance">Finance</option>
                <option value="academia">Academia</option>
                <option value="politics">Politics</option>
                <option value="health">Health</option>
                <option value="opinion">Opinion</option>
                <option value="food">Food</option>
                <option value="game">Gaming</option>
            </select>
        </form>
    )
}