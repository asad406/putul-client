import { useEffect } from "react"
const useTitle = title => {
    useEffect(()=> {
        document.title = `Putul | ${title}`;
    },[title])
}

export default useTitle;