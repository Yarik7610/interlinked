import axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "72b345ec-4648-48d6-8fef-743539ee3510"}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    getFriends() {
        return instance.get(`users?friend=${true}`)
        .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
        .then(response => response.data.resultCode)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data.resultCode)
    },
   
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {  //нету айди так как он в куку залогиненного юзера
        return instance.put(`profile/status`, {status:status})
    },
    updateProfile(data) {
        return instance.put(`profile`, data)
    },
    updateProfilePhoto(imgPath) {
        const formData = new FormData()
        formData.append('img', imgPath)
        return instance.put(`profile/photo`, formData)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
        .then(response => response.data.resultCode)
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}