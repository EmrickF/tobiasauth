"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const params = useSearchParams()
  const router = useRouter()
  const id = params.get("id")
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (!id) {
      router.replace("/login")
      return
    }

    async function fetchProf() {
      const res = await fetch(`/api/profile?id=${id}`)
      if (res.ok) {
        const data = await res.json()
        setUser(data)
      } else {
        router.replace("/login")
      }
    }
    fetchProf()
  }, [id, router])


  return (
    <div style={{ padding: 20 }}>
      <h1>Profil</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
