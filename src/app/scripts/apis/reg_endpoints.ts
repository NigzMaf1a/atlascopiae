const reg_endpoints = {
    login: '/api/auth/login',

    user: {
        post: '/api/reg/post',
        get: '/api/reg/get',
        patch: (id: number) => `/api/reg/patch/${id}`
    },

    task: {
        post: '/api/task/post',
        get: '/api/task/get',
        patch: (id: number) => `/api/task/patch/${id}`
    },

    task_alloc: {
        post: '/api/alloc/post',
        get: '/api/alloc/get'
    },

    about: {
        get: '/api/about/get',
        patch: (id: number) => `/api/about/patch/${id}`
    },

    contact: {
        get: '/api/contact/get',
        patch: (id: string) => `/api/contact/patch/${id}`
    }
} as const

export default reg_endpoints