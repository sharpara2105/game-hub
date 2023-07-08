import useData from "./usedata";


export interface Genre{
    id: number;
    name: string;
}



const useGenres = () => useData<Genre>('/genres');
export default useGenres;