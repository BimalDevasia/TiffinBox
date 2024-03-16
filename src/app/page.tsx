import Link from "next/link";

export default function Home() {
  return (
    <>
  <div>hello</div>
  <Link href="/login">
  <a>Go to Specific Route</a>
</Link>
    </>
  );
}
