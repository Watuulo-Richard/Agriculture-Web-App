export type categoryProp = {
    id: string,
    title: string,
    slug: string,
    image: string,
    description: string,
    createdAt: string,
    updatedAt: string
}

export type productProp = {
        id: string,
        title: string,
        slug: string,
        description: string,
        rating: string[],
        price: number,
        quantity: number,
        images: string[]
        createdAt: string,
        updatedAt: string,
        categoryId: string

}