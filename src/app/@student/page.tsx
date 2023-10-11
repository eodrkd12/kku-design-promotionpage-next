'use client';

import { useEffect } from "react";

export default function StudentScreen() {

    useEffect(() => {
        console.log(2)
    }, [])

    return (
        <div>
            student
        </div>
    )
}