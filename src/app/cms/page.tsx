import { notFound } from "next/navigation"

export default function Cms() {
  const not = notFound()

  return (
    <div>
      <h2>microCMS</h2>
    </div>
  )
}