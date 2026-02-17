'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function BookmarkList({ userId }: { userId: string }) {
  const [bookmarks, setBookmarks] = useState<any[]>([])

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    setBookmarks(data || [])
  }

  useEffect(() => {
    fetchBookmarks()

    const channel = supabase
      .channel('realtime-bookmarks')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bookmarks' },
        fetchBookmarks
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const remove = async (id: number) => {
    await supabase.from('bookmarks').delete().eq('id', id)
  }

  return (
    <ul>
      {bookmarks.map((b) => (
        <li key={b.id} className="flex justify-between mb-2">
          <a href={b.url} target="_blank" className="text-blue-600">
            {b.title}
          </a>
          <button onClick={() => remove(b.id)} className="text-red-500">
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
