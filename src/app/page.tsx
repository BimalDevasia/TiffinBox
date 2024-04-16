import Link from "next/link";
import New from "@/components/New" 
export default function Home() {
  return (
    <>
    <div className="bg-black absolute w-full h-full">

  <New />
  <div>hello</div>
  <Link href="/login">
<button className="bg-inyellow">Sign Up</button></Link>
    </div>

    </>
  );
}
