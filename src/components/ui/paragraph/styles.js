import styled from 'styled-components';
import { TextSize } from './Paragraph';
import { paragraphs } from '../../../themes/typography';

export const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;
    box-sizing: border.box;
    font-size: ${(props) => {
        let fontSize;
        if (props.textSize === TextSize.REGULARLARGE) {
            fontSize = paragraphs.regularP1.fontSize;
        } else if (props.textSize === TextSize.BOLDLARGE) {
            fontSize = paragraphs.boldP1.fontSize;
        } else if (props.textSize === TextSize.REGULARMEDIUM) {
            fontSize = paragraphs.regularP2.fontSize;
        } else if (props.textSize === TextSize.BOLDMEDIUM) {
            fontSize = paragraphs.boldP2.fontSize;
        } else if (props.textSize === TextSize.REGULARSMALL) {
            fontSize = paragraphs.regularP3.fontSize;
        } else if (props.textSize === TextSize.BOLDSMALL) {
            fontSize = paragraphs.boldP3.fontSize;
        }
        return fontSize;
    }};
    line-height: ${(props) => {
        let lineHeight;
        if (props.textSize === TextSize.REGULARLARGE) {
            lineHeight = paragraphs.regularP1.lineHeight;
        } else if (props.textSize === TextSize.BOLDLARGE) {
            lineHeight = paragraphs.boldP1.lineHeight;
        } else if (props.textSize === TextSize.REGULARMEDIUM) {
            lineHeight = paragraphs.regularP2.lineHeight;
        } else if (props.textSize === TextSize.BOLDMEDIUM) {
            lineHeight = paragraphs.boldP2.lineHeight;
        } else if (props.textSize === TextSize.REGULARSMALL) {
            lineHeight = paragraphs.regularP3.lineHeight;
        } else if (props.textSize === TextSize.BOLDSMALL) {
            lineHeight = paragraphs.boldP3.lineHeight;
        }
        return lineHeight;
    }};
    font-weight: ${(props) => {
        let fontWeight;
        if (props.textSize === TextSize.REGULARLARGE) {
            fontWeight = paragraphs.regularP1.fontWeight;
        } else if (props.textSize === TextSize.BOLDLARGE) {
            fontWeight = paragraphs.boldP1.fontWeight;
        } else if (props.textSize === TextSize.REGULARMEDIUM) {
            fontWeight = paragraphs.regularP2.fontWeight;
        } else if (props.textSize === TextSize.BOLDMEDIUM) {
            fontWeight = paragraphs.boldP2.fontWeight;
        } else if (props.textSize === TextSize.REGULARSMALL) {
            fontWeight = paragraphs.regularP3.fontWeight;
        } else if (props.textSize === TextSize.BOLDSMALL) {
            fontWeight = paragraphs.boldP3.fontWeight;
        }
        return fontWeight;
    }};
`;