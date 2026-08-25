const endpoints = {
    designations: {
        post: '/api/v1/designations',
        get: '/api/v1/designations',
        put: (id: number) => `/api/v1/designations/${id}`,
        patch: (id: number) => `/api/v1/designations/${id}/status`
    },

    stores: {
        post: '/api/v1/stores',
        get: '/api/v1/stores',
        put: (id: number) => `/api/v1/stores/${id}`,
        patch: (id: number) => `/api/v1/stores/${id}/status`
    },

    items: {
        post: '/api/v1/items',
        get: '/api/v1/items',
        put: (id: number) => `/api/v1/items/${id}`,
        patchValue: (id: number) => `/api/v1/items/${id}/value`,
        patchName: (id: number) => `/api/v1/items/${id}/name`,
        patchDesc: (id: number) => `/api/v1/items/${id}/description`
    },

    storedItems: {
        post: '/api/v1/stored-items',
        get: '/api/v1/stored-items',
        getByStore: (storeId: number) =>
            `/api/v1/stored-items/store/${storeId}`,
        getByItem: (itemId: number) =>
            `/api/v1/stored-items/item/${itemId}`,
        patchQty: (id: number) =>
            `/api/v1/stored-items/${id}/quantity`
    },

    storeWorth: {
        post: '/api/v1/store-worth',
        get: '/api/v1/store-worth',
        getByStore: (storeId: number) =>
            `/api/v1/store-worth/store/${storeId}`,
        patchWorth: (storeId: number) =>
            `/api/v1/store-worth/${storeId}/worth`
    },

    restockRequests: {
        post: '/api/v1/restock-requests',
        get: '/api/v1/restock-requests',
        getByStore: (storeId: number) =>
            `/api/v1/restock-requests/store/${storeId}`,
        getByType: (reqType: string) =>
            `/api/v1/restock-requests/type/${reqType}`,
        getByStatus: (reqStatus: string) =>
            `/api/v1/restock-requests/status/${reqStatus}`,
        getByDate: (date: string) =>
            `/api/v1/restock-requests/date/${date}`,
        patchStatus: (id: number) =>
            `/api/v1/restock-requests/${id}/status`,
        patchTotal: (id: number) =>
            `/api/v1/restock-requests/${id}/total`
    },

    restockRequestItems: {
        post: '/api/v1/restock-request-items',
        get: '/api/v1/restock-request-items',
        getByRequest: (resReqId: number) =>
            `/api/v1/restock-request-items/request/${resReqId}`,
        getByItem: (itemId: number) =>
            `/api/v1/restock-request-items/item/${itemId}`,
        put: (id: number) =>
            `/api/v1/restock-request-items/${id}`,
        patchQty: (id: number) =>
            `/api/v1/restock-request-items/${id}/quantity`,
        patchTotal: (id: number) =>
            `/api/v1/restock-request-items/${id}/total`,
        patchStatus: (id: number) =>
            `/api/v1/restock-request-items/${id}/status`
    },

    storeWorthDaily: {
        post: '/api/v1/store-worth-daily',
        get: '/api/v1/store-worth-daily',
        getByStore: (storeId: number) =>
            `/api/v1/store-worth-daily/store/${storeId}`,
        getByDate: (date: string) =>
            `/api/v1/store-worth-daily/date/${date}`,
        getByStoreAndDate: (
            storeId: number,
            date: string
        ) =>
            `/api/v1/store-worth-daily/store/${storeId}/date/${date}`,
        patchWorth: (id: number) =>
            `/api/v1/store-worth-daily/${id}/worth`
    }
}

export default endpoints