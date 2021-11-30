import React from 'react';
import { chakra, useStyles } from '@chakra-ui/system';

const StyledMenuItem = React.forwardRef<any, any>(
  (props, ref) => {
    const { type, ...rest } = props
    const styles = useStyles()

    /**
     * Given another component, use its type if present
     * Else, use no type to avoid invalid html, e.g. <a type="button" />
     * Else, fall back to "button"
     */
    const btnType = rest.as ? type ?? undefined : "button"

    const buttonStyles: any = {
      textDecoration: "none",
      color: "inherit",
      userSelect: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      outline: 0,
      ...styles.item,
    }

    return (
      <chakra.button ref={ref} type={btnType} {...rest} __css={buttonStyles} />
    )
  },
);
StyledMenuItem.displayName = 'StyledMenuItem';

export default StyledMenuItem;
