import Paragraph, { TextSize } from "./Paragraph"

export default {
    title: 'Typography/Text'
}

export function Text() {
    return (
        <>
            <Paragraph textSize={TextSize.BOLDLARGE}>A long time ago in a galaxy far, far away / Large Bold</Paragraph>
            <Paragraph textSize={TextSize.REGULARLARGE}>A long time ago in a galaxy far, far away / Large Regular</Paragraph>
            <Paragraph textSize={TextSize.BOLDMEDIUM}>A long time ago in a galaxy far, far away / Medium Bold</Paragraph>
            <Paragraph textSize={TextSize.REGULARMEDIUM}>A long time ago in a galaxy far, far away / Medium Regular</Paragraph>
            <Paragraph textSize={TextSize.BOLDSMALL}>A long time ago in a galaxy far, far away / Small Bold</Paragraph>
            <Paragraph textSize={TextSize.REGULARSMALL}>A long time ago in a galaxy far, far away / Small Regular</Paragraph>
        </>
    );
}