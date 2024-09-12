import { environment } from "environments/environment";

const {JSON_API} = environment

export const urls = {
    users: {
        base: `${JSON_API}/users`,
        byId: (id: number): string => `${JSON_API}/users/${id}`
    },
    posts: {
        base: `${JSON_API}/posts`
    }
}
