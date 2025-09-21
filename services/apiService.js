// Determina a URL base dependendo do ambiente
const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        // No cliente, usar URL relativa
        return '/api/';
    }
    // No servidor (durante build/SSG), usar URL absoluta
    return process.env.NEXTAUTH_URL ? `${process.env.NEXTAUTH_URL}/api/` : 'http://localhost:3000/api/';
};

export const ApiService = {
    get(endPoint) {
        const url = getBaseUrl();
        return fetch(`${url}${endPoint}`).then(response => response.json())
    },
    post(endPoint, data) {
        const url = getBaseUrl();
        return fetch(`${url}${endPoint}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    },
    delete(endPoint) {
        const url = getBaseUrl();
        return fetch(`${url}${endPoint}`, {
            method: 'DELETE',
        }).then(response => response.json());
    },
    // edit(endPoint){
    //     return fetch(`${url}${endPoint}`, {
    //         method: 'POST',
    //     }).then(response => response.json());
    // }
}