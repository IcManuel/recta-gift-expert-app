import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loadding: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loadding: false
                });
            });
    }, [category]);

    return state;
}