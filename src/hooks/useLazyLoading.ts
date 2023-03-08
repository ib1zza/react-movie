import {useEffect, useRef, useState} from "react";
import {useInView} from "framer-motion";
import {IBaseFilm} from "../types/IFilm";

export const useLazyLoading = (initialPage?: number) => {
    const [pageCount, setPageCount] = useState<number>(initialPage || 1);

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect( () => {
        if(!isInView) return;
        setPageCount(prevState => prevState + 1)
        console.log(pageCount)
    }, [isInView])


   return {pageCount, ref}
}