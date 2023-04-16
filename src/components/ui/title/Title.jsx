import { StyledTitle } from "./styles.js";

export const TitleLevel = {
    H1: "1",
    H2: "2",
    H3: "3",
    H4: "4",
    H5: "5",
    H6: "6"
};

function Title({
    level = '1',
    children,
}) {
    return (
        <StyledTitle as={`h${level}`} level={level}>{children}</StyledTitle>
    );
};

export default Title;