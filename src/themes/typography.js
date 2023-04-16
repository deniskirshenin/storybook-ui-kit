export const typography = {
    fontFamily: 'Montserrat, Roboto',
    fontWeight: {
        extrabold: 900,
        bold: 800,
        regularbold: 700,
        regular: 400,
    },
    fontSize: {
        large1: '56px',
        large2: '48px',
        large3: '40px',
        medium1: '32px',
        medium2: '24px',
        medium3: '20px',
        small1: '16px',
        small2: '13px',
    },
    lineHeight: {
        large1: '64px',
        large2: '56px',
        large3: '48px',
        medium1: '40px',
        medium2: '32px',
        medium3: '28px',
        small1: '24px',
        small2: '20px',
    }
};

export const headings = {
    h1: {
        fontSize: typography.fontSize.large1,
        lineHeight: typography.lineHeight.large1,
        fontWeight: typography.fontWeight.extrabold,
    },
    h2: {
        fontSize: typography.fontSize.large2,
        lineHeight: typography.lineHeight.large2,
        fontWeight: typography.fontWeight.regularbold,
    },
    h3: {
        fontSize: typography.fontSize.large3,
        lineHeight: typography.lineHeight.large3,
        fontWeight: typography.fontWeight.regularbold,
    },
    h4: {
        fontSize: typography.fontSize.medium1,
        lineHeight: typography.lineHeight.medium1,
        fontWeight: typography.fontWeight.regularbold,
    },
    h5: {
        fontSize: typography.fontSize.medium2,
        lineHeight: typography.lineHeight.medium2,
        fontWeight: typography.fontWeight.regularbold,
    },
    h6: {
        fontSize: typography.fontSize.medium3,
        lineHeight: typography.lineHeight.medium3,
        fontWeight: typography.fontWeight.regularbold,
    },
}

export const paragraphs = {
    regularP1: {
        fontSize: typography.fontSize.medium3,
        lineHeight: typography.lineHeight.medium3,
        fontWeight: typography.fontWeight.regular,
    },
    regularP2: {
        fontSize: typography.fontSize.small1,
        lineHeight: typography.lineHeight.small1,
        fontWeight: typography.fontWeight.regular,
    },
    regularP3: {
        fontSize: typography.fontSize.small2,
        lineHeight: typography.lineHeight.small2,
        fontWeight: typography.fontWeight.regular,
    },
    boldP1: {
        fontSize: typography.fontSize.medium3,
        lineHeight: typography.lineHeight.medium3,
        fontWeight: typography.fontWeight.regularbold,
    },
    boldP2: {
        fontSize: typography.fontSize.small1,
        lineHeight: typography.lineHeight.small1,
        fontWeight: typography.fontWeight.regularbold,
    },
    boldP3: {
        fontSize: typography.fontSize.small2,
        lineHeight: typography.lineHeight.small2,
        fontWeight: typography.fontWeight.regularbold,
    },
};