import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase/firebase-config";



export const useFetchFincas = () => {
    const [fincas, setFincas] = useState([]);
    useEffect(() => {
        const fincasCollection = collection(db, 'fincas');
        onSnapshot(fincasCollection, (queryFincas) => {
            const docs = [];
            queryFincas.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setFincas(docs);
        });
    }, []);
    // console.log(fincas);
    return fincas;
};
