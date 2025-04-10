import "./button.css"

type Props = {
  label: string;
  parentMethod: () => void;
};

export default function Button({ label, parentMethod }: Props) {
  return <button onClick={parentMethod}>{label}</button>;
}
