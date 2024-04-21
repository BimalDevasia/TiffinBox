import Link from "next/link";
import connectMongoDB from '@/lib/mongodb'
import ProtectedRoute from "./components/ProtectedRoute";
export default async function Home() {
  await connectMongoDB()
  return (
    <ProtectedRoute>
      <>
        <div className="bg-black absolute w-full h-full">
          <div>hello</div>
          <Link href="/login">
            <button className="bg-inyellow">Sign Up</button>
          </Link>
        </div>
      </>
    </ProtectedRoute>
  );
}
