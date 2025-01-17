"use server"

import { categoryProp } from "@/Types/types"
import { productProp } from "@/Types/types"

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

const PDTAPI = 'https://market-hazel.vercel.app/api/products'


export async function fetchProducts(){
    try {
        const res = await fetch (PDTAPI)
        const recievedProducts = await res.json()
        return recievedProducts.data as productProp[]
    } catch(error){
        console.log(error)
    }
}


export async function fetchSingleProduct(id:string){
    const singleProductAPI = `https://market-hazel.vercel.app/api/products/${id}`
    try {
        const res = await fetch (singleProductAPI)
        const recievedProduct = await res.json()
        return recievedProduct.data as productProp
    } catch(error){
        console.log(error)
        return null
    }
}