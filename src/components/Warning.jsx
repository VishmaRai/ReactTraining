export default function Warning({showWarning}) {
    if(!showWarning) return null;

  return (
    <p className="warning">You can&apos;t use script tags here!</p>
  )
}

