// import axios from "axios"
import instance from "../axios"

export const apiLogin = (payload) => new Promise(async (resolve, reject) => {
    try {
        console.log('payloadApiLogin', payload)
        const response = await instance({
            method: 'POST',
            url: '/api/v1/login',
            data: payload
        })
        console.log('response', response)

        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }

})


export const apiGetCurrentUser = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/getCurrentUser'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetAllUser = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: '/api/v1/getAllUser'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetUserById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'GET',
            url: `/api/v1/getUserById/${id}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }

})


export const apiUpdateUser = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/updateUser',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteUser = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'DELETE',
            url: `/api/v1/deleteUser/${id}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangeRole = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/changeRole',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangeAvatar = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/changeAvatar',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiRemoveAvatar = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/removeAvatar',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiChangePassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/changePassword',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiResetPassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/resetPassword ',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiConfirmResetPassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/confirmResetPassword',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})


export const apiNewPassword = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/newPassword',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiAddWishlist = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/addWishlist',
            data: payload
        })
        resolve(response)
    } catch (err) {
        reject(err)
    }
})

export const apiRemoveWishlist = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/removeWishlist',
            data: payload
        })
        resolve(response)
    } catch (err) {
        reject(err)
    }
})

export const apiDeleteWishlist = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'POST',
            url: '/api/v1/deleteWishlist',
            data: payload
        })
        resolve(response)
    } catch (err) {
        reject(err)
        console.log(err)
    }


})