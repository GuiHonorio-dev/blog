'use client'

import { EditorProps } from '@tiptap/pm/view'
import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react'

interface MyEditorProps extends EditorProps {
  content: string
}

export function Editor({ content }: MyEditorProps) {
  const [homePage, setHomePage] = useState(content)
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: homePage,
    editable: false,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
  }})

  return (
    <EditorContent 
       className="max-w-[700px] mx-auto pt-16 prose prose-invert"
      editor={editor}
    />
    )
}