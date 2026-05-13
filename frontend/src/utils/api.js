import axios from 'axios';

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
            try {
                let rawHex = movie.imagem.replace(/^\\x/, '');

                let hexString = "";
                for (let i = 0; i < rawHex.length; i += 2) {
                    hexString += String.fromCharCode(parseInt(rawHex.substr(i, 2), 16));
                }

                let binary = "";
                for (let i = 0; i < hexString.length; i += 2) {
                    binary += String.fromCharCode(parseInt(hexString.substr(i, 2), 16));
                }

                movie.imagem = `data:image/png;base64,${btoa(binary)}`;
            } catch (err) {
                movie.imagem = null;
            }
            return movie;
        });

        return {
            status: res.status,
            data: processedData
        };

    } catch (err) {
        return {
            status: 404,
            data: { 'error': 'Not Found' }
        };
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