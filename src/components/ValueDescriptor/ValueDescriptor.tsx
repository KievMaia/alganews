import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
    description: string
    value: number
    color: 'primary' | 'default'
    isCurrency?: boolean
}

function ValueDescriptor(props: ValueDescriptorProps) {
    return <VD.Wrapper variant={props.color}>
        <span className='Description'>{props.description}</span>
        <div className='Content'>
            {
                props.isCurrency ?
                    <span className='Value'>
                    {(props.value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                </span>
                    :
                    <span className='Value'>
            {(props.value).toLocaleString('pt-BR')}
        </span>
            }
        </div>
    </VD.Wrapper>
}

export default ValueDescriptor
