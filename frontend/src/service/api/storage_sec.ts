import { Fetch } from "@tools/fetch/fetch"

export const GET_STORAGE_SEC = async () => {
    const res = await Fetch({
        path: "/api/storage-sec",
        method: "GET"
    })

    return res;
    
}