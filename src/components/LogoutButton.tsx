'use client'
import { supabase } from '@/lib/supabase'

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await supabase.auth.signOut()
        window.location.reload()
      }}
      className="px-4 py-2 bg-gray-800 text-white rounded"
    >
      Logout
    </button>
  )
}
