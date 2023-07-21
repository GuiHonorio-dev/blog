import { RxInfoCircled } from "react-icons/rx"
import { NewType } from "./NewType"

interface SucessProps {
  show: boolean
}

export function Sucess({ show }: SucessProps) {
  if(show) {
    return (
      <div
          className="absolute right-10 top-10 flex items-center justify-center gap-2 w-48 h-10 rounded-md bg-green-600 text-white text-xs font-bold"><RxInfoCircled size={17}/>Post criado com sucesso</div>
    )
  }

  return (
    <></>
  )
  
}