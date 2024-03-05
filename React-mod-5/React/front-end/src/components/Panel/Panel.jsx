import { useState, useEffect, useMemo } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import { FilterButton } from "../FilterButton/FilterButton";
import { Info } from "../Info/Info";
import styles from "./Panel.module.css";
import { getCategoryInfo} from "../../utils/getCategoryInfo";

export function Panel({ onError }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const url = "http://localhost:3000/words";
    
    
    useEffect(() => {
        let isCanceled = false;
        const params = selectedCategory ? `?category=${selectedCategory}` : "";
        fetch(`${url}${params}`)
                .then((res) => {
                    if(res.ok){
                        return res.json();
                    }

                    throw new Error("Błąd ładowania danych");

                })
                .then((res) => {
                    if(!isCanceled){
                        setData(res);
                        setIsLoading(false);
                    }
                }).catch(onError);

                return () => {
                    isCanceled = true;
                }
            }, [selectedCategory, onError]);
            
        const categoryInfo = useMemo(() => 
            getCategoryInfo(selectedCategory), [selectedCategory]);

    // useEffect(() => {
    //     const timeout = setTimeout(
    //         () => alert("Sprawdź naszą stronę"), 
    //         3000
    //     );

    //     return () => {
    //         clearTimeout(timeout);
    //     }
    // }, []);


    function handleFormSubmit(formData){
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then((res) => {
            if(!selectedCategory || selectedCategory === res.category){
                setData((prevData) => [...prevData, res]);
            }
        });
    }

    function handleDeleteItem(id){
        fetch(`${url}/${id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if(res.ok){
                setData((prevData) => 
                    prevData.filter((item) => item.id != id))
            } else {
                throw new Error("Błąd podczas usuwania");
            }
        }).catch(onError);
    }

    function handleFilterClick(category){
        setSelectedCategory(category);
    }
    if(isLoading) {
        return <p>Ładowanie</p>;
    }
    return(
        <>
            <section className={styles.section}>
                <Info>{categoryInfo}</Info>
                <Form onFormSubmit = {handleFormSubmit}/>
                <div className={styles.filters}>
                    <FilterButton active={selectedCategory === null} onClick={() => handleFilterClick(null)}>Wszystkie</FilterButton>
                    <FilterButton active={selectedCategory === "noun"} onClick={() => handleFilterClick("noun")}>Rzeczowniki</FilterButton>
                    <FilterButton active={selectedCategory === "verb"} onClick={() => handleFilterClick("verb")}>Czasowniki</FilterButton>
                </div>
                <List data={data} onDeleteItem={handleDeleteItem}></List>
            </section>
        </>
    );
}
