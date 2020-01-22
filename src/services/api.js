import { useEffect, useState } from "react";

export function useFetch(url, defaultResponse) {
    const [data, setData] = useState(defaultResponse);

    async function getApiData(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData({ isLoading: false, data, error: false });
        } catch (e) {
            setData({ isLoading: false, error: true });
        }
    }

    useEffect(() => {
        async function fetchData() {
            await getApiData(url);
        }
        fetchData();
    }, [url]);

    if (data) {
        return data;
    }

    return null;
}
