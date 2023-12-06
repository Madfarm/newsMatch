"use client"

import styles from './CategoryFilter.module.css'
import { useCategoryContext } from "../../../utilities/categoryContext"
import { validCategories } from '../../../types/CategoryTypes';
import { capitalizeFirstLetter } from '../../../utilities/capitalizeFirstLetter';


export default function CategoryFilter(props) {
    const { categoryState, setCategoryState } = useCategoryContext();


    function handleChange(e) {
        setCategoryState(e.target.value)
    }



    return (
        <form className={styles.form}>
            <label className={styles.label}>Categories</label>
            <select className={styles.selector} onChange={handleChange} value={categoryState}> 
            
                {/* Iterate through provided enum for valid categories and create an options element for each while capitalizing the first letter of each in the UI */}
                {Object.keys(validCategories).map((val) =>
                    <option value={val}>
                        {capitalizeFirstLetter(val)}
                    </option>
                )}
            </select>
        </form>
    )
}