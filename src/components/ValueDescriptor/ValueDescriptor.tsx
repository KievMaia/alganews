import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
    isCurrency?: boolean
    description: string
    value: number
}

export default function ValueDescriptor({description, isCurrency, value}: ValueDescriptorProps) {
    return <VD.Wrapper>
        <span className='Description'>{description}</span>
        <div>
            {
                isCurrency &&
                <span className='Currency'>

                </span>
            }

            <span className='Value'>
            {(value / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </span>
        </div>
    </VD.Wrapper>
}