export const configure = {
    apiUrl: "https://localhost:44351/"
}
export const bucketlistConstants = {
    ADD_LIST: "ADD_LIST",
    UPDATE_LIST: "UPDATE_LIST",
    GET_LIST: "GET_LIST",
    GET_SINGLE_LIST: "GET_SINGLE_LIST",
    DELETE_LIST: "DELETE_LIST"
}
export const bucketlistItemConstants = {
    ADD_ITEM: "ADD_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM",
    GET_ITEMS: "GET_ITEMS",
    GET_SINGLE_ITEM: "GET_SINGLE_ITEM",
    DELETE_ITEM: "DELETE_ITEM"
}

export const AccountConstants = {
    ADD_USER: "ADD_USER",
    GET_USER: "GET_USER",
    LOGIN_USER: "LOGIN_USER"
}

export const accountApi = {
    login: "auth",
    register: "auth/register",
}

export const bucklistApi = {
    add_list: "bucketlists",
    get_single_list: "bucketlists",
    get_all_list: "bucketlists",
    update_list: "bucketlists",
    delete_list: "bucketlists",
}

export const bucklistItemApi = {
    add_item: "bucketlists",
    get_single_item: "bucketlists",
    get_all_item: "bucketlists",
    update_item: "bucketlists",
    delete_item: "bucketlists",
}