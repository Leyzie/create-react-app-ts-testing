const BASE_URL = 'https://jsonplaceholder.typicode.com';

type FetchType = {
    url: string,
    method: string,
    params?: Object
}

class RequestAction {
    private async fetchFunction({url, method, params}: FetchType) {
        return await fetch(`${BASE_URL}/${url}`, {method, ...params})
    }

    async get(url: string, params?: Object) {
        return await this.fetchFunction({
            url,
            method: 'GET',
            params
        })
    }

    async post(url: string, params?: Object) {
        return await this.fetchFunction({
            url,
            method: 'POST',
            params
        })
    }

    async delete(url: string, params?: Object) {
        return await this.fetchFunction({
            url,
            method: 'DELETE',
            params
        })
    }

    async PUT(url: string, params?: Object) {
        return await this.fetchFunction({
            url,
            method: 'PUT',
            params
        })
    }
}

export const request = new RequestAction();

// TODO: Примеры для запроса
// https://jsonplaceholder.typicode.com/
// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
//     POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1
