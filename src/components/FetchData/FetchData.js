function GetData() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch("dataInfo.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setData(await response.json());
            return data;
        } catch (error) {
            console.log(`Error ${error.message}!`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <></>;
}

export default GetData;
