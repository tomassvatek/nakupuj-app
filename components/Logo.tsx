import { forwardRef } from "react";
import { Image } from "@chakra-ui/react";

const Logo = forwardRef<SVGSVGElement>((props, ref) => {
  return <Image src="logo.svg" alt="Logo" width="160px" />;
});

Logo.displayName = "Logo";

export default Logo;
