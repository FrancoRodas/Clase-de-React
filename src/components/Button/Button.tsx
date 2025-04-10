import "./button.css"

interface Props {
  label: string,
  parentMethod: () => void,
}

export const button = ({label, parentMethod}:Props) => {
  
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
     </button>
  )
}