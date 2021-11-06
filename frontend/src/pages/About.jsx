import React, {useEffect} from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'YouTube | About '
    }, [])
    return (
        <div>
            i am about page sir
        </div>
    )
}
