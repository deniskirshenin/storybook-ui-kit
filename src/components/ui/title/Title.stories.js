import Title, { TitleLevel } from "./Title";

export default {
    title: 'Typography/Headings',
}

export function Headings() {
    return (
        <>
            <Title level={TitleLevel.H1}>Do Androids Dream of Electric Sheep? / H1</Title>
            <Title level={TitleLevel.H2}>Do Androids Dream of Electric Sheep? / H2</Title>
            <Title level={TitleLevel.H3}>Do Androids Dream of Electric Sheep? / H3</Title>
            <Title level={TitleLevel.H4}>Do Androids Dream of Electric Sheep? / H4</Title>
            <Title level={TitleLevel.H5}>Do Androids Dream of Electric Sheep? / H5</Title>
            <Title level={TitleLevel.H6}>Do Androids Dream of Electric Sheep? / H6</Title>
        </>
    );
}