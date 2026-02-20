'use client'
import { supabase } from '@/lib/supabase'

export default function LoginButton() {
  return (
    <button
      onClick={() =>
        supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
          },
        })
      }
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Login with Google
    </button>
  )
}
