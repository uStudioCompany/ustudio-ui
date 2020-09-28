import React from 'react';

import { intrinsicComponent } from '@brix-ui/utils/functions';

import type { IconProps } from './icon.props';

const Check = intrinsicComponent<IconProps, SVGSVGElement>(function Check(props, ref) {
  return (
    <svg
      ref={ref}
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.80818 9.0033C4.61291 8.80804 4.61291 8.49145 4.80818 8.29619L9.75792 3.34644C9.95319 3.15118 10.2698 3.15118 10.465 3.34644C10.6603 3.54171 10.6603 3.85829 10.465 4.05355L5.51528 9.0033C5.32002 9.19856 5.00344 9.19856 4.80818 9.0033Z" />
      <path d="M2.68954 6.17486C2.8848 5.9796 3.20138 5.9796 3.39664 6.17486L5.51796 8.29618C5.71323 8.49145 5.71323 8.80803 5.51796 9.00329C5.3227 9.19855 5.00612 9.19855 4.81086 9.00329L2.68954 6.88197C2.49428 6.68671 2.49428 6.37013 2.68954 6.17486Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54764 8.97099C5.53832 8.98208 5.5284 8.99286 5.51796 9.00329C5.51752 9.00374 5.51712 9.00419 5.51667 9.00464C5.41919 9.10139 5.29177 9.14976 5.16437 9.14974C5.03613 9.1504 4.90769 9.10203 4.80957 9.00464C4.80912 9.00419 4.80862 9.00374 4.80818 9.0033C4.79772 8.99284 4.78787 8.98203 4.77853 8.97091L2.68954 6.88197C2.49428 6.68671 2.49428 6.37013 2.68954 6.17486C2.8848 5.9796 3.20138 5.9796 3.39664 6.17486L5.16312 7.9413L9.75792 3.34644C9.95319 3.15118 10.2698 3.15118 10.465 3.34644C10.6603 3.54171 10.6603 3.85829 10.465 4.05355L5.54764 8.97099ZM5.16312 7.65845L3.53811 6.03345C3.26475 5.76008 2.82153 5.76008 2.54816 6.03345C2.2748 6.30681 2.2748 6.75003 2.54816 7.0234L4.63139 9.10662C4.64264 9.11965 4.65444 9.13236 4.6668 9.14472C4.80436 9.28228 4.98493 9.35062 5.16522 9.34974C5.34411 9.34955 5.52294 9.28121 5.65943 9.14472C5.67177 9.13238 5.68354 9.11971 5.69476 9.10671L10.6065 4.19497C10.8799 3.92161 10.8799 3.47839 10.6065 3.20503C10.3331 2.93166 9.88992 2.93166 9.61655 3.20503L5.16312 7.65845Z"
      />
    </svg>
  );
});

export default Check;
