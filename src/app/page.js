'use client'

import About from "../../components/about";
import Approval from "../../components/approval";
import Contact from "../../components/contact";
import TopHeader from "../../components/header";
import Teaching from "../../components/teaching";

export default function Home() {
  return (
    <>
      <TopHeader />
      <About />
      <Approval />
      <Teaching />
      <Contact />
    </>
  )
}
