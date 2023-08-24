import React from 'react'

interface PrimaryButton {
    name: string,
    action?:()=>void
}

export default function PrimaryButton(props: PrimaryButton) {
  return (
    <a
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  Download
</a>
  )
}
