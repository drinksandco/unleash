import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { SpacingArgument } from '@mui/system/createTheme/createSpacing';

const StyledHtmlTooltipBody = styled('div')(({ theme }) => ({
    overflow: 'auto',
    padding: theme.spacing(1, 1.5),
}));

const StyledHtmlTooltip = styled(
    ({ className, maxWidth, maxHeight, ...props }: IHtmlTooltipProps) => (
        <Tooltip
            {...props}
            title={<StyledHtmlTooltipBody>{props.title}</StyledHtmlTooltipBody>}
            classes={{ popper: className }}
        />
    ),
    {
        shouldForwardProp: prop => prop !== 'maxWidth' && prop !== 'maxHeight',
    }
)<{ maxWidth?: SpacingArgument; maxHeight?: SpacingArgument }>(
    ({ theme, maxWidth, maxHeight }) => ({
        maxWidth: maxWidth || theme.spacing(37.5),
        [`& .${tooltipClasses.tooltip}`]: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.paper,
            padding: 0,
            borderRadius: theme.shape.borderRadiusMedium,
            boxShadow: theme.shadows[2],
            color: theme.palette.text.primary,
            fontWeight: theme.fontWeight.medium,
            maxWidth: 'inherit',
            border: `1px solid ${theme.palette.lightBorder}`,
            maxHeight: maxHeight || theme.spacing(37.5),
        },
        [`& .${tooltipClasses.arrow}`]: {
            '&:before': {
                border: `1px solid ${theme.palette.lightBorder}`,
            },
            color: theme.palette.background.paper,
        },
    })
);

export interface IHtmlTooltipProps extends TooltipProps {
    maxWidth?: SpacingArgument;
    maxHeight?: SpacingArgument;
}

export const HtmlTooltip = (props: IHtmlTooltipProps) => (
    <StyledHtmlTooltip {...props}>{props.children}</StyledHtmlTooltip>
);
