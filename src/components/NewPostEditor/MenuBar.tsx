"use client"

import { RxFontBold, RxFontItalic, RxCode, RxHeading } from 'react-icons/rx'
import { Editor } from '@tiptap/react'

interface EditorProps {
  editor: Editor | null
}



export function MenuBar({ editor }: EditorProps) {
  if(editor === null) {
    return (
      <h2>Loading editor...</h2>
    )
  }
  return (
    <div className='w-full h-8 p-2 flex gap-4 items-center bg-zinc-800 justify-start border-b-2 border-zinc-600 rounded-t-md'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive('bold')}
        className='w-6 h-6 flex items-center justify-center bg-zinc-800   data-[active=true]:text-zinc-950 data-[active=false]:hover:opacity-30'
      >
        <RxFontBold size={17}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive('italic')}
        className='w-6 h-6 flex items-center justify-center bg-zinc-800   data-[active=true]:text-zinc-950 data-[active=false]:hover:opacity-30'
      >
        <RxFontItalic size={17} className=''/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        data-active={editor.isActive('codeBlock')}
        className='w-6 h-6 flex items-center justify-center bg-zinc-800   data-[active=true]:text-zinc-950 data-[active=false]:hover:opacity-30'
      >
        <RxCode size={17}/>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        data-active={editor.isActive('heading', {level: 1})}
        className='w-6 h-6 flex items-center justify-center bg-zinc-800   data-[active=true]:text-zinc-950 data-[active=false]:hover:opacity-30'
      >
        <RxHeading size={17}/>
      </button>
    </div>
  )
}


// 1:10