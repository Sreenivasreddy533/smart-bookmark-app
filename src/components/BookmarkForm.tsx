'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function BookmarkForm({ userId }: { userId: string }) {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  const addBookmark = async () => {
    await supabase.from('bookmarks').insert({
  url,
  title,
  user_id: userId,
})

window.location.reload()

    setUrl('')
    setTitle('')
  }

  return (
    <div className="mb-4">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={addBookmark}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Bookmark
      </button>
    </div>
  )
}
