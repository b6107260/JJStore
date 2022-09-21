import { Fetch } from "@tools/fetch/fetch"

export const GET_CATEGORY_TH = async () => {
    const res = await Fetch({
        path: "/api/subcategoryth",
        method: "GET"
    })

    return res;
    
}