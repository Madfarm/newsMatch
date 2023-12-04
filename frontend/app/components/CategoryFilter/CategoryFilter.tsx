"use client"

import styles from './CategoryFilter.module.css'
import { useCategoryContext } from "../../../utilities/categoryContext"
import { validCategories } from '../../../types/CategoryTypes';
import { VALID_LOADERS } from 'next/dist/shared/lib/image-config';


export default function CategoryFilter(props) {
    const { categoryState, setCategoryState } = useCategoryContext();


    function handleChange(e) {
        setCategoryState(e.target.value)
    }



    return (
        <form className={styles.form}>
            <label className={styles.label}>Categories</label>
            <select className={styles.selector} onChange={handleChange} value={categoryState}>
                {Object.keys(validCategories).map((val) =>
                    <option value={val}>
                        {val}
                    </option>
                )}
            </select>
        </form>
    )
}