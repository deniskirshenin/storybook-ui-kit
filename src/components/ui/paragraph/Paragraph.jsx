import { StyledParagraph } from "./styles"

export const TextSize = {
    REGULARSMALL: "regularSmall",
    REGULARMEDIUM: "regularMedium",
    REGULARLARGE: "regularLarge",
    BOLDSMALL: "boldSmall",
    BOLDMEDIUM: "boldMedium",
    BOLDLARGE: "boldLarge",
}

export default function Paragraph({ children, textSize }) {
    return <StyledParagraph textSize={textSize}>{children}</StyledParagraph>;
}