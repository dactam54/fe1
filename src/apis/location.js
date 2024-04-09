import instance from "../axios"
export const apiCreateLocation = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/createLocation',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdateLocation = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/updateLocation',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteLocation = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'DELETE',
            url: `/api/v1/deleteLocation/${id}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }

})

export const apiGetAllLocation = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/getAllLocation'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetLocationById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/getLocationById/' + id
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangeStatus = (id, status) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: `/api/v1/changeStatus/${id}`,
            data: { status }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUploadImageLocation = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/uploadImageLocation',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetLimitLocation = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/getLimitLocation',
            params: query,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


export const apiSearch = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/search',
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})