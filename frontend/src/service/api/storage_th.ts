import { Fetch } from "@tools/fetch/fetch"

export const GET_STORAGE_TH = async () => {
    const res = await Fetch({
        path: "/api/storage-th",
        method: "GET"
    })

    return res;
    
}