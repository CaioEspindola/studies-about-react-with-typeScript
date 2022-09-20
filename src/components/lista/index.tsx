import { ITarefa } from "../../types/tarefa";
import Item from "../lista/item"
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[],
  // Uma função que recebe um parametro, um tipo que é ITarefa e um void, que é um tipo de retorno, que nao retorna nada. 
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  
  return (
    <aside className={style.listaTarefas}>
        <h2> Estudos do Dia </h2> 
        <ul>
          {tarefas.map(item => (
            <Item 
               selecionaTarefa={selecionaTarefa}
               key={item.id} // forma que o React tem de linkar esse <li>  para onde ele renderiza o DOM.
               {...item}
               />
          ))}
        </ul>
    </aside>    
)}

export default Lista