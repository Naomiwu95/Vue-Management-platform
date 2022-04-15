import axios from "./axios";

export const getMenu=(param)=>{
return axios.request({
    url:'/api/permission/getMenu',
    method:'post',
    data: param
})
}
export const getData=()=>{
    return axios.request({
        url:'/api/home/getData',
        method:'get'

    })
}

export const getUser=(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params

    })
}

export const getGroup=(params)=>{
    return axios.request({
        url:'/group/getGroup',
        method:'get',
        params

    })
}

export const getContent=(params)=>{
    return axios.request({
        url:'/content/getContent',
        method:'get',
        params

    })
}

export const getManage=(params)=>{
    return axios.request({
        url:'/manage/getManage',
        method:'get',
        params

    })
}

export const getAppeal=(params)=>{
    return axios.request({
        url:'/appeal/getAppeal',
        method:'get',
        params

    })
}

export const getComplaint=(params)=>{
    return axios.request({
        url:'/complaint/getComplaint',
        method:'get',
        params

    })
}

export const getSign=(params)=>{
    return axios.request({
        url:'/sign/getSign',
        method:'get',
        params

    })
}

export const getComment=(params)=>{
    return axios.request({
        url:'/comment/getComment',
        method:'get',
        params

    })
}


// export const getMenu = (params)=>{
//     return axios.request({
//         url:'/api/permission/getMenu',
//         method:'post',
//         data: param
//     })
// }