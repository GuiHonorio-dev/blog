"use client"

import { Mac } from "@/components/Mac";
import { NewPostEditor } from '@/components/NewPostEditor/NewPostEditor'
import { Sucess } from "@/components/Sucess";
import { useState } from "react";

const publishPost = async (title: string) => {
  const response = await fetch('http://localhost:3333/posts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title:`${title}`, content: '<h1>Primeiro Post</h1>' }),
  });
}



export default function Createpost() {
    
  const [title, setTitle] = useState('')
  const [showSucess, setShowSucess] = useState<boolean>(false)
  const [content, setContent] = useState('')
  
  const handleContent = (data: string) => {
    setContent(data)
  }

  return (
    <div className="min-h-screen text-zinc-50 bg-gradient-to-b p-8 from-sky-400 to-sky-200">
      <div className="bg-slate-800 w-[1100px] min-h-[720px] mx-auto rounded-xl p-4 grid grid-cols-[5rem_1fr] relative">
      <Sucess show={showSucess}/>

        <Mac />
        <main className="w-full mx-auto pt-16 px-10">
          <h1 className="font-bold text-4xl">Publicar novo conteúdo</h1>
          <input 
            type="text" 
            placeholder="Título"
            onChange={(value) => {
              setTitle(value.target.value)
            }}  
            className="bg-zinc-900 border text-sm border-zinc-500 rounded-md overflow-hidden w-full h-9 py-2 px-4 focus:outline-none mt-10" />
          <NewPostEditor content={content} sendContent={handleContent}/>
          <div className="flex w-full justify-end gap-4 mt-10">
            <button className="w-24 h-9 p-auto text-[14px] text-white bg-gray-500 hover:bg-gray-500/40  rounded-md">Cancelar</button>
            <button
              onClick={() => {
                publishPost(title)
                setShowSucess(true)
                setContent('')
                setTimeout(() => {
                  setShowSucess(false)
                }, 2000)
              }}
              className="w-24 h-9 p-auto text-[14px] text-white bg-green-500 font-bold rounded-md hover:opacity-90">Publicar</button>
          </div>
          
        </main>
      </div>
    </div>
  )
}