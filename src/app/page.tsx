import Link from "next/link";
import Navbar from "@/components/Navbar"
export default function Home() {
  return (
    <>
    <div className="bg-black absolute w-full h-full">
  <Navbar/>

  <div>hello</div>
  <Link href="/login">
<button className="bg-inyellow">Sign Up</button></Link>
    </div>

    </>
  );
}
