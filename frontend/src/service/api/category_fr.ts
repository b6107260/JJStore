import { Fetch } from "@tools/fetch/fetch"

export const GET_CATEGORY_FR = async () => {
    const res = await Fetch({
        path: "/api/subcategoryfr",
        method: "GET"
    })

    return res;
    
}