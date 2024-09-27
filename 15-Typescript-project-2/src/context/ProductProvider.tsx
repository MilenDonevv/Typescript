import { createContext, ReactElement, useEffect, useState } from "react"



export type ProductType = {
    sku: string,
    name: string,
    price: number,
}


// statically setting the initial State instead of fetching it
const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

// const initState: ProductType[] = []

export type UseProductsContextType = { products: ProductType[] }

// initial context state
const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

// need to create a children type now
type ChildrenType = { children?: ReactElement | ReactElement[] }

// start creating the Provider
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    // if there was a real API to pull the data from
    
    // useEffect(() => {
    //     const fetchProfucts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .catch(err => {
    //             if (err instanceof Error) console.log(err.message)
    //         })

    //         return data
    //     }

    //     fetchProfucts().then(products => setProducts(products))
    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

// last we export the ProductsContext
export default ProductsContext


// in order to launch the json server -->
// npx json-server -w data/products.json -p 3500