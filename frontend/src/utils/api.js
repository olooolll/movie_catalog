import axios from 'axios';
import {convertPostgresByteaToBase64} from "@/utils/imageTransform.js";

const URL = 'https://cscucbpgxmrtmwdrojgl.supabase.co';
const KEY = 'sb_publishable_etfQv3OVHIqr8U3hEviBXA_hru_1hJE';

export async function getMovies() {
    try {
        const res = await axios.get(
            `${URL}/rest/v1/movies?select=*`,
            {
                headers: {
                    'apikey': KEY,
                    'Authorization': `Bearer ${KEY}`
                }
            }
        );

        const processedData = res.data.map((movie) => {
            return {
                ...movie,
                imagem: convertPostgresByteaToBase64(movie.imagem)
            };
        });


        if(res.status === 200 && res.data.length > 0) {
            return {
                status: res.status,
                data: processedData
            };
        }

        return {
            status: 404,
            data: { 'error': 'Not Found' }
        };

    } catch (err) {
        return {
            status: 404,
            data: { 'error': 'Not Found' }
        };
    }
}

export async function getMovie(movieId, withImg = true) {

    const res = await axios.get(
        `${URL}/rest/v1/movies`,
        {
            headers: {
                apikey: KEY,
                Authorization: `Bearer ${KEY}`
            },

            params: {

                select: withImg
                    ? '*'
                    : 'id,nome,genero,ano',

                id: `eq.${movieId}`
            }
        }
    );

    if (res.status === 200 && res.data.length > 0) {

        const processedData = res.data.map((movie) => {
            return {
                ...movie,
                imagem: convertPostgresByteaToBase64(movie.imagem)
            };
        });

        if (withImg) {

            return {
                status: 200,
                data: processedData[0]
            }
        }
        return {
            status: 200,
            data: res.data[0]
        };

    }

    return {
        status: 404,
        data: { 'error': 'Not Found' }
    }
}

export async function setMovie(movie){
    try{
        const res = await axios.post(
            `${URL}/rest/v1/movies`,
            movie,
            {
                headers: {
                    'apikey': KEY,
                    'Authorization': `Bearer ${KEY}`,
                    'Content-Type': 'application/json',
                }
            }
        )

        return {
            status: 200,
            data: res.data
        }

    } catch(err){
        return {
            status: 400,
            data: { 'error': 'format not supported' }
        }
    }
}

export async function deleteMovie(movieId){
    try{
        const res = await axios.delete(
            `${URL}/rest/v1/movies?id=eq.${movieId}`,
            {
                headers: {
                    'apikey': KEY,
                    'Authorization': `Bearer ${KEY}`,
                }
            }
        )
        return {
            'status': 204,
            'data': `movie id equal ${movieId} deleted`
        }

    } catch(err){
        return {
            'status': 401,
            'data': {
                'error': 'movie cannot be delete'
            }
        }
    }
}

export async function updateMovie(movie) {

    const data = {
        nome: movie.nome,
        genero: movie.genero,
        ano: movie.ano,
    };

    if (movie.imagem != null) {
        data.imagem = movie.imagem;
    }

    try {

        const res = await axios.patch(
            `${URL}/rest/v1/movies`,
            data,
            {
                headers: {
                    apikey: KEY,
                    Authorization: `Bearer ${KEY}`,
                    "Content-Type": "application/json",
                    Prefer: "return=representation"
                },

                params: {
                    id: `eq.${movie.id}`
                }
            }
        );

        return {
            status: res.status,
            data: res.data
        };

    } catch (err) {

        console.log(err.response?.data || err);

        return {
            status: 412,
            data: {
                error: 'Update failed'
            }
        };
    }
}