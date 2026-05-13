import axios from 'axios';

const URL = 'https://cscucbpgxmrtmwdrojgl.supabase.co';
const KEY = 'sb_publishable_etfQv3OVHIqr8U3hEviBXA_hru_1hJE';

export default async function getMovies() {
    try {
        const res = await axios.get(
            `${URL}/rest/v1/movies?select=*`,
            {
                headers: {
                    apikey: KEY,
                    Authorization: `Bearer ${KEY}`
                }
            }
        );

        return {
            status: res.status,
            data: res.data.map((movie) => {
                const base64 = btoa(
                    movie.image.slice(2,-1)
                        .match(/\w{2}/g)
                        .map(a => String.fromCharCode(parseInt(a, 16)))
                        .join('')
                )
                movie.image = `data:image/png;base64,${base64}`;
                return movie;
            })
        };

    } catch (err) {
        return {
            status: 404,
            data: { error: 'Not Found' }
        };
    }
}