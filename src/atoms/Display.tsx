import '../styles/Display.css'

type DisplayProps = {
    data: number
}

export default function Display({data}:DisplayProps) {
  return (
    <div className='counter'>{data}</div>
  )
}
