import { Fetch } from "@tools/fetch/fetch"

export const GET_CAR_MODEL = async () => {
    const res = await Fetch({
        path: "/api/carmodel",
        method: "GET"
    })

    return res;
    
}