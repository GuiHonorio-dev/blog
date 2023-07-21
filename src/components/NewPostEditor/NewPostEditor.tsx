"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import { MenuBar } from './MenuBar'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

interface NewPostEditorProps{
  content: string
  sendContent: (content: string) => void
}

export function NewPostEditor({ content, sendContent }: NewPostEditorProps) {
  const [post, setPost] = useState('')
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    onUpdate(editor) {
      setPost(editor.editor.getHTML())
    },
    content,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })
  sendContent(post)



  return (
    <div className='w-full h-72 mt-6'>
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className='bg-slate-950 max-w-full min-h-full overflow-y-hidden rounded-b-md p-4'/>
    </div>
  )
}