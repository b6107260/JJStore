import { Fetch } from "@tools/fetch/fetch"

export const GET_COMPANY = async () => {
    const res = await Fetch({
        path: "/api/company",
        method: "GET"
    })

    return res;
    
}