import Link from "next/link";

export default function Home() {
  return (
    <>
  <div>hello</div>
  <Link href="/specific-route">
  <a>Go to Specific Route</a>
</Link>
    </>
  );
}
