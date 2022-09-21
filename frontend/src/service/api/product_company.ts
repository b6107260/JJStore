import { Fetch } from "@tools/fetch/fetch"

export const GET_PRODUCT_COMPANY = async () => {
    const res = await Fetch({
        path: "/api/product-company",
        method: "GET"
    })

    return res; 
}

export const GET_ID_PRODUCT_COMPANY = async (id: number)=>{
    const res = await Fetch({
        path: `/api/product-company/${id}`,
        method: "GET"
    })
    return res;
}

export const POST_PRODUCT_COMPANY = async (value: any) => {
    const res = await Fetch({
        path: "/api/product-company",
        method: 'POST',
        data: value
    })

    return res;
}