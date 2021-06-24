/*import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";*/
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {


    const { data: images, loadding } = useFetchGifs(category);


    //getGifs();
    return (
        <>
            <h3>{category} </h3>
            {loadding && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid animate__animated animate__fadeIn">
                {

                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img} />
                    })
                }
            </div>
        </>

    );
};