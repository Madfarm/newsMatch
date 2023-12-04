"use client"

import { createContext, useContext, useState } from "react"

const CategoryContext = createContext({})

export function CategoryContextProvider({ children }){
    const [categoryState, setCategoryState] = useState(undefined);

    return (
        <CategoryContext.Provider value={{ categoryState, setCategoryState }}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = () => useContext(CategoryContext);

