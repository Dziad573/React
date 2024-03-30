import { useEffect, useState } from "react";
export function useGetData(url){
    const [data, setStocks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false;
        
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    setError(null);
                    return res.json();
                }

                throw new Error("Coś poszło nie tak...");
            })
            .then((res) => {
                if (isCancelled) {
                    return;
                }
                setStocks(res);
            })
            .catch((e) => {
                setError(e);
            });

        return () => {
            isCancelled = true;
        };
    }, [url])

    return { data, error };
}
