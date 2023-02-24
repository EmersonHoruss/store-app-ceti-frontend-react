import { config } from "./config";

const url = config.baseUrl + "/product"

export const ProductLoaders = {
    get: async function () {
        return await fetch(url, config.options)
            .then(response => response.json())
            .then(data => { console.log(data); return data })
    },

    post: async function () {
        return await fetch(url, { ...config.options, method: "POST" })
            .then(response => response.json())
            .then(data => { console.log(data); return data })
    },

    put: async function () {

    },
}

