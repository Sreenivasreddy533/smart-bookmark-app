'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import BookmarkForm from '@/components/BookmarkForm'
import BookmarkList from '@/components/BookmarkList'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const getUser = async () => {
      const { data } = await supabase.auth.getUser()

      if (!mounted) return

      if (!data.user) {
        router.replace('/')
        return
      }

      setUser(data.user)
      setLoading(false)
    }

    getUser()

    return () => {
      mounted = false
    }
  }, [router])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    )
  }

  return (
   <div className="max-w-xl mx-auto mt-10 p-6 glass">

      <h2 className="text-2xl font-bold mb-4">
        🔖 Your Bookmarks
      </h2>

      <BookmarkForm userId={user.id} />
      <BookmarkList userId={user.id} />
    </div>
  )
}
