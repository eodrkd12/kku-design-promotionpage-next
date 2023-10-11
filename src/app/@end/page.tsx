'use client';

import { useEffect } from "react";

export default function EndScreen() {

    useEffect(() => {
        console.log(4)
    }, [])

    return (
        <div>
            end
        </div>
    )
}
