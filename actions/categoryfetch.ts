"use server"

import { categoryProp } from "@/Types/types"

const API = 'https://market-hazel.vercel.app/api/categories'
export async function fetchCategories(){
    try {
        const response = await fetch(API)
        const recievedCategories = await response.json()
        return recievedCategories.data as categoryProp[]
    } catch(error) {
        console.log(error)
    }
}