import { Chips, Chip } from '../'

const ChipBar = ({items, active, onClick}) => {
    return (
        <Chips>
            {items.map((item, index) => {
                    return (
                        <Chip
                            key={index}
                            label={item}
                            active={active?.toLowerCase() === item?.toLowerCase()}
                            onClick={() => {onClick(item)}}
                        />
                    )
                }
            )}
        </Chips>
    )
}

export default ChipBar