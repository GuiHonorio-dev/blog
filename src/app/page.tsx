"use client"

import { Editor } from "@/components/Editor"
import { Mac } from '@/components/Mac'
import { use, useEffect, useState } from "react"
import { apresentation } from '@/utils/apresentation'
import { renderPost } from "@/utils/renderPost"

interface PostProps {
  id: string,
  title: string,
  content: string,
  created_at: string,
}

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [homePost, setHomePost] = useState(apresentation)
  const [editorKey, setEditorKey] = useState(0)

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch('http://localhost:3333/posts')
      const data = await response.json()
      setPosts(data.posts)
    }
    getAllPosts();
  }, [])

  useEffect(() => {
    if(posts.length != 0) {
      const firstPost = posts[0]
      const homePostFormated = renderPost(firstPost.title, firstPost.content)
      setHomePost(homePostFormated)
    }
  }, [])

  useEffect(() => {
    setEditorKey((editorKey) => editorKey + 1)
  }, [homePost])

  if (posts.length === 0) {
    
    return (
      <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <div className="bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
          <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4 text-white">
            <Mac />
          </aside>
        </div>
      </div>
    )
  }

 return (
  <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
    <div className="bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
      <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4 text-white">
        <Mac />
        <p className="font-semibold mt-10 text-lg">Outros posts:</p>
        <div className="flex flex-col gap-4 mt-10">
          {
            posts.map(post => (
              <p
                className="font-bold cursor-pointer hover:opacity-60 transition-shadow"
                onClick={() => {
                  setHomePost(renderPost(post.title, post.content))
                }}
              >{post.title}</p>
            ))
          }
        </div>
      </aside>
      <main className="p-4">
        <Editor 
        key={editorKey}
        content={homePost}/>
      </main>
    </div>
  </div>
 )
}

  
