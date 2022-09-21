import { Fetch } from "@tools/fetch/fetch"

export const GET_CATEGORY_SEC = async () => {
    const res = await Fetch({
        path: "/api/subcategorysec",
        method: "GET"
    })

    return res;
    
}