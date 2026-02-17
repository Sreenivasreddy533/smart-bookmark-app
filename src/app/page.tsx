'use client'


import { supabase } from '@/lib/supabase'


export default function Home() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/dashboard`,
      },
    })
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Smart Bookmark App
      </h1>

      <button
        onClick={login}
        className="animated-btn px-6 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  )
}
