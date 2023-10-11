'use client'

export const dynamic = 'force-static'

export default function DynamicRouteSegementPage ({ params }: { params: { id: string } }) {
  const { id } = params

  return `dynamic route segment for id "${id}"`
}
