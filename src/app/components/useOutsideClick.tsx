import { useEffect } from "react";

interface Props {
    ref: any;
    handleClickOutside: () => void;
}

export default function useOutsideClick({ref, handleClickOutside} : Props) {
    useEffect(() => {
        function handleClick(event : any) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, []);
}