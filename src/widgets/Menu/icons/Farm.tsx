import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M10.406 16.898V24h3.188v-7.102zm2.45 6.368h-1.711v-5.633h1.71zm0 0M13.05 5.438h-2.1l-1.09 7.101h4.28zm-1.468.734h.836l.867 5.633h-2.57zm0 0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.918 11.387v4.18l-4.703-3.415L14.5 0h-5L6.785 12.152l-4.703 3.414v-4.18h-.734v11.145h7.59v1.102h.734v-6.367h-.735v3.062H2.082v-3.855l5.36-3.891L10.09.734h3.82l2.649 11.848 5.359 3.89v3.856h-6.855v-3.062h-.735v6.367h.735V22.53h7.59V11.387zm-12.98 9.675v.735H2.082v-.735zm12.98.735h-6.855v-.735h6.855zm0 0"
      />
    </Svg>
  );
};

export default Icon;
