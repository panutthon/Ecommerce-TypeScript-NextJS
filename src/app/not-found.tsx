import Link from "next/link";

export default function NotFound() {
  return (
    <div>
        <h1>404</h1>
        <p>Not Found</p>
        <Link   href="/"> click to Home</Link>
    </div>
  )
}