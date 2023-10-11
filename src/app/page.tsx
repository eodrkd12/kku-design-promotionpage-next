'use client';

import { useEffect } from "react";

export default function IntroductionScreen() {

  useEffect(() => {
    console.log(1)
  }, [])

  return (
    <div>
      introduction
    </div>
  )
}