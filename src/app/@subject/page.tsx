'use client';

import { useEffect } from "react";

export default function SubjectScreen() {

    useEffect(() => {
        console.log(3)
    }, [])

    return (
        <div>
            subject
        </div>
    )
}