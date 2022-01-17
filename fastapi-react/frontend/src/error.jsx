import React from 'react'

export default function Error({ error }) {
  return (
    <>
    {error && (
      <p>Error: {error}</p>
    )}
    </>
  )
}
