import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    obrigatorio: boolean
    valor: string
    aoAlterado: (valor: string) => void
    itens: string[]
}

const ListaSuspensa = ({label, obrigatorio, valor, aoAlterado, itens} :ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => 
                        aoAlterado(evento.target.value)} 
                        required={obrigatorio} 
                        value={valor}
                    >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa