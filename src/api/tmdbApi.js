import axiosClient from './axiosClient'

export const category = {
    movie: 'movie',
    tv: 'tv',
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
}

const tmdbApi = {
    getMovieList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, { params })
    },

    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type]
        return axiosClient.get(url, { params })
    },

    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos'
        return axiosClient.get(url, { params: {} })
    },

    details: (cate, id, params) => {
        const url = category[cate] + '/' + id
        return axiosClient.get(url, { params })
    },

    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits'
        return axiosClient.get(url, { params: {} })
    },

    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar'
        return axiosClient.get(url, { params: {} })
    },

    search: (cate, params) => {
        const url = 'search/' + category[cate]
        return axiosClient.get(url, { params })
    },

    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,

    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default tmdbApi
