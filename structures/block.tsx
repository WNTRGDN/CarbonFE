import React, { FC } from 'react'
import { Jumbotron, Cards, Image, Text, Split } from 'WNTR/blocks'
import { IBlock } from 'WNTR/interfaces';

var controls: { [key: string]: any } = {
    Jumbotron: Jumbotron,
    Cards: Cards,
    Image: Image,
    Text: Text,
    Split: Split
};

const Block: FC<IBlock> = (block) => {
    if (controls[block.type] !== undefined){
        const Block = controls[block.type]
        return (
            <Block {...block} />
        )
    }
    return null
}

export default Block