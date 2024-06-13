import Link from "next/link";
import connectMongoDB from '@/lib/mongodb'
import ProtectedRoute from "./components/ProtectedRoute";
export default async function Home() {
  await connectMongoDB()
  return (
    <ProtectedRoute>
      <>
        <div className="w-screen h-screen bg-black"></div>
        
      </>
    </ProtectedRoute>
  );
}
