const API = 'https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io';

export async function getNewReleases()
{
    const date = new Date();
    try {
        const res = await fetch(API+'/new_movies/?r_date=' + date);
        const data = await res.json();
        console.log(data);
		return res.status(200).json({ status: true, data });
	} catch (error) {
		return res.json({ status: false, error });
	}
};

export async function searchByTheatre(theatre,date){
    try {
        const res = await fetch(API+'/specific_movie_theater?theater_name=' + theatre + '&d_date=' + date);
        const data = await res.json();
        console.log(data);
		return res.status(200).json({ status: true, data });
	} catch (error) {
		return res.json({ status: false, error });
	}
};

export async function searchByTimeslot(theatre,start_time,end_time){
    try {
        const res = await fetch(API+'/specific_movie_theater?theater_name=' + theatre + '&time_start=' + start_time + '&time_end=' + end_time);
        const data = await res.json();
        console.log(data);
		return res.status(200).json({ status: true, data });
	} catch (error) {
		return res.json({ status: false, error });
	}
};