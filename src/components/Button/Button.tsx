import { useEffect } from "react";
import "./button.css"

type Props = {
  label: string;
  parentMethod: () => void;
};

export default function Button({ label, parentMethod }: Props) {

  useEffect(()=>{
    console.log('label cambiado')
  }, [label])
  return <button onClick={parentMethod}>{label}</button>;
}
