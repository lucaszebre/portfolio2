"use client"
import Bottom from "@/components/bottom";
import Projets from "@/components/projets";
import Skill from "@/components/skill";
import Top from "@/components/top";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const Contact = useRef(null)
  function scrollToBottom() {
    Contact.current.scrollIntoView({ behavior: 'smooth' })
    
  }
  return (
    <>
    <Top 
    onClick={scrollToBottom}
    />
    <Skill />
    
    <Projets
    onClick={scrollToBottom}
    />
    
    <div ref={Contact} className="Scroll">
      <Bottom /> 
    </div>
  </>
  );
}
