import { useEffect } from 'react';

export function useTitle(title) {
    useEffect(() => {
        return document.title = title;
});
}