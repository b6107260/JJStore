import { Fetch } from "@tools/fetch/fetch"

export const GET_STORAGE_FR = async () => {
    const res = await Fetch({
        path: "/api/storage-fr",
        method: "GET"
    })

    return res;
    
}