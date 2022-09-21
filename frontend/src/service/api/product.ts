import { Fetch } from "@tools/fetch/fetch"

export const GET_PRODUCT = async () => {
    const res = await Fetch({
        path: "/api/products",
        method: "GET"
    })

    return res;
    
}

export const GET_ID_PRODUCT = async (id: number)=>{
    const res = await Fetch({
        path: `/api/products/${id}`,
        method: "GET"
    })
    return res;
}

export const POST_PRODUCT = async (value: any) => {
    const res = await Fetch({
        path: "/api/products",
        method: 'POST',
        data: value
    })

    return res;
}

// export const DELETE_ID_PRODUCT = async (id: number) => {
//     const res = await Fetch({
//         path: '/api/products/${id}',
//         method: "DELETE",
        
//     })
//     return res;
// }