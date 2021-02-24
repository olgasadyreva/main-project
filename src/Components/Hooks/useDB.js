import { useState, useEffect } from 'react';

export const useDB = database => {
    const [db, setdb] = useState(null);

    useEffect(() => {
        const dbRef = database.ref('goods');
        dbRef.on('value', snapshot => {
            setdb(snapshot.val());
        })
    }, [database]); //пустой массив нужен, чтобы функция отработала один раз, а не перед каждым рендером
    return db;
}