import { Fetch } from "@tools/fetch/fetch"

export const GET_CAR_BRAND = async () => {
    const res = await Fetch({
        path: "/api/car-brand",
        method: "GET"
    })

    return res;
    
}