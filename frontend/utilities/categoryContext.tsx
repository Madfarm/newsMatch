"use client"
import React from "react";
import { createContext, useContext, useState } from "react"
import { CategoryContextType } from "../types/CategoryTypes";

export const CategoryContext = createContext<CategoryContextType>({
    categoryState: 'all',
    setCategoryState: () => null
})

export function CategoryContextProvider({ children }){
    const [categoryState, setCategoryState] = useState<string>('all');

    return (
        <CategoryContext.Provider value={{ categoryState, setCategoryState }}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = () => useContext(CategoryContext);

