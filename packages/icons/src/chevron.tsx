import React from 'react';

import { classNames, intrinsicComponent } from '@brix-ui/utils/functions';

import type { IconProps } from './icon.props';

const Chevron = intrinsicComponent<IconProps, SVGSVGElement>(function Chevron({ className, ...props }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 10 6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('chevron', className)}
      {...props}
    >
      <path d="M4.99368 5.68198C4.60316 5.29146 4.60316 4.65829 4.99368 4.26777L8.58988 0.671573C8.78514 0.476311 9.10172 0.476311 9.29698 0.671573C9.49224 0.866835 9.49224 1.18342 9.29698 1.37868L4.99368 5.68198Z" />
      <path d="M0.690466 0.671584C0.885729 0.476321 1.20231 0.476321 1.39758 0.671584L4.99373 4.26774C5.38427 4.65828 5.38425 5.29147 4.99368 5.68198L0.690463 1.37869C0.495203 1.18343 0.495204 0.866845 0.690466 0.671584Z" />
    </svg>
  );
});

export default Chevron;
