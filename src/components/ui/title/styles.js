import styled from 'styled-components';
import { headings } from '../../../themes/typography';
import { TitleLevel } from './Title';

export const StyledTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: ${(props) => {
        let fontSize;
        if (props.level === TitleLevel.H1) {
            fontSize = headings.h1.fontSize;
        } else if (props.level === TitleLevel.H2) {
            fontSize = headings.h2.fontSize;
        } else if (props.level === TitleLevel.H3) {
            fontSize = headings.h3.fontSize;
        } else if (props.level === TitleLevel.H4) {
            fontSize = headings.h4.fontSize;
        } else if (props.level === TitleLevel.H5) {
            fontSize = headings.h5.fontSize;
        } else if (props.level === TitleLevel.H6) {
            fontSize = headings.h6.fontSize;
        }
        return fontSize;
    }};
    line-height: ${(props) => {
        let lineHeight;
        if (props.level === TitleLevel.H1) {
            lineHeight = headings.h1.lineHeight;
        } else if (props.level === TitleLevel.H2) {
            lineHeight = headings.h2.lineHeight;
        } else if (props.level === TitleLevel.H3) {
            lineHeight = headings.h3.lineHeight;
        } else if (props.level === TitleLevel.H4) {
            lineHeight = headings.h4.lineHeight;
        } else if (props.level === TitleLevel.H5) {
            lineHeight = headings.h5.lineHeight;
        } else if (props.level === TitleLevel.H6) {
            lineHeight = headings.h6.lineHeight;
        }
        return lineHeight;
    }};
    font-weight: ${(props) => {
        let fontWeight;
        if (props.level === TitleLevel.H1) {
            fontWeight = headings.h1.fontWeight;
        } else if (props.level === TitleLevel.H2) {
            fontWeight = headings.h2.fontWeight;
        } else if (props.level === TitleLevel.H3) {
            fontWeight = headings.h3.fontWeight;
        } else if (props.level === TitleLevel.H4) {
            fontWeight = headings.h4.fontWeight;
        } else if (props.level === TitleLevel.H5) {
            fontWeight = headings.h5.fontWeight;
        } else if (props.level === TitleLevel.H6) {
            fontWeight = headings.h6.fontWeight;
        }
        return fontWeight;
    }};
`;