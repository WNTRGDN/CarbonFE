import React, { FC } from 'react'
import { Jumbotron, Cards, Image, Text, Split, Teasers } from 'WNTR/blocks'
import { IBlock } from 'WNTR/interfaces';

var controls: { [key: string]: any } = {
    Jumbotron: Jumbotron,
    Cards: Cards,
    Image: Image,
    Text: Text,
    Split: Split,
    Teasers: Teasers
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