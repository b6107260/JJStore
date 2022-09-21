import { Fetch } from "@tools/fetch/fetch"

export const GET_PRODUCT_GRADE = async () => {
    const res = await Fetch({
        path: "/api/product-grade",
        method: "GET"
    })

    return res;
    
}