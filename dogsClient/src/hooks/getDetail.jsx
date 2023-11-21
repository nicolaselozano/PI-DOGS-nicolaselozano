/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCleanDetail, getDetailBreed } from "../redux";


const getDetail = () =>{
    const dispatch = useDispatch();
    const { id } = useParams();
    const {detailBreed} = useSelector((state) => state.dogs);

    useEffect(() => {
        dispatch(getDetailBreed(id));

        return () => {
        dispatch(getCleanDetail());
        };

    }, [dispatch, id]);

    return detailBreed;
}

export default getDetail;