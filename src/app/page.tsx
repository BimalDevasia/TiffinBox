import Link from "next/link";
import connectMongoDB from '@/lib/mongodb'
export default async function Home() {
  await connectMongoDB()
  return (
    <>
      <div className="bg-black absolute w-full h-full">
        <div>hello</div>
        <Link href="/login">
          <button className="bg-inyellow">Sign Up</button>
        </Link>
      </div>
    </>
  );
}
