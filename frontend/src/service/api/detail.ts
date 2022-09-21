import { Fetch } from "@tools/fetch/fetch";

export const POST_DETAIL = async (value: any) => {
    const res = await Fetch({
        path: "/api/detail",
        method: 'POST',
        data: value
    })

    return res;
}