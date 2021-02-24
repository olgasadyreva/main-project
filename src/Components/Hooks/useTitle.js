import { useEffect } from 'react';

/* export function useTitle(title) {
    useEffect(() => {
        return document.title = title;
});
} */

export const useTitle = openItem => {
    useEffect(() => {
        document.title = openItem ? openItem.name : `MRDonald's`;
        console.log(openItem);
}, [openItem]);
}