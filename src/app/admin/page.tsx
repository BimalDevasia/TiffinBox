"use client"
import React from 'react'
import { useRouter,usePathname } from 'next/navigation';

function page() {
  const router=useRouter()
  router.push("admin/manageuser")
  return (
    <div>pmvksn</div>
  )
}

export default page