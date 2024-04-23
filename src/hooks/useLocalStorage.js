import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const [currentValue, setCurrentValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(currentValue));
    }, [key, currentValue]);

    const updateStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setCurrentValue(value);
    };

    return [currentValue, updateStorage];
};

export default useLocalStorage;
