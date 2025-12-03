import '../styles/Button.css'

type ButtonProps = {
    text:string;
    type: "primary" | "secundary",
    onClick: ()=> void
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button className={`button  ${type}`} onClick={onClick}>{text}</button>
  )
}
