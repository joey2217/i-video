import { Spinner } from '@/components/Icons'

export default function Loading({}: {}) {
  return (
    <div className="h-screen flex items-center justify-center text-4xl  text-blue-600">
      <Spinner />
    </div>
  )
}
