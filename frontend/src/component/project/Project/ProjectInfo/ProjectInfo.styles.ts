import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { flexRow } from 'themes/themeStyles';
import { styled } from '@mui/material';

export const StyledDivContainer = styled('div')(({ theme }) => ({
    ...flexRow,
    width: '225px',
    flexDirection: 'column',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        marginBottom: theme.spacing(2),
    },
}));

export const StyledDivPercentageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
}));

export const StyledDivInfoContainer = styled('div')(({ theme }) => ({
    margin: '0',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadiusLarge,
    width: '100%',
    padding: theme.spacing(3, 2, 3, 2),
    [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5),
        ...flexRow,
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: theme.fontSizes.smallBody,
        position: 'relative',
        padding: theme.spacing(1.5),
        '&:first-of-type': {
            marginLeft: '0',
        },
        '&:last-of-type': {
            marginRight: '0',
        },
    },
}));

export const StyledParagraphSubtitle = styled('p')(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

export const StyledParagraphEmphasizedText = styled('p')(({ theme }) => ({
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        fontSize: theme.fontSizes.bodySize,
        marginBottom: theme.spacing(4),
    },
}));

export const StyledSpanLinkText = styled('p')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    ...flexRow,
    justifyContent: 'center',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
        position: 'absolute',
        bottom: theme.spacing(1.5),
    },
}));

export const StyledArrowIcon = styled(ArrowForwardIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(1),
}));
