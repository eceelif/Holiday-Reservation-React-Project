import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage"; // useLocalStorage hooks'unu import edin

const useGeceModu = () => {
    const [geceModu, setGeceModu] = useLocalStorage("geceModu", false); // localStorage ile geceModu durumunu yönetin

    const toggleGeceModu = () => {
        setGeceModu((prevModu) => !prevModu);
    };

    return [geceModu, toggleGeceModu];
};

export default useGeceModu;
