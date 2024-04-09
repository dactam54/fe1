import instance from "../axios"
export const apiCreateLocation = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/location/createLocation',
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
            url: '/api/v1/location/updateLocation',
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
            url: `/api/v1/location/deleteLocation/${id}`
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
            url: '/api/v1/location/getAllLocation'
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
            url: '/api/v1/location/getLocationById/' + id
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
            url: `/api/v1/location/changeStatus/${id}`,
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
            url: '/api/v1/location/uploadImageLocation',
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
            url: '/api/v1/location/getLimitLocation',
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
            url: '/api/v1/location/search',
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})