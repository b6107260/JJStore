import { Fetch } from "@tools/fetch/fetch"

export const GET_UNIT = async () => {
    const res = await Fetch({
        path: "/api/unit",
        method: "GET"
    })

    return res;
    
}