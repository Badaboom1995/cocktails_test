import React from 'react';
import { ReactNode } from 'react';
import './TypographyStyles.scss';

type TypographyProps = {
  children: ReactNode;
  variant: 'title' | 'subtitle' | 'body' | 'caption';
  textStyle?: 'italic' | 'normal';
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement | null>;
};

const Typography = ({
  children,
  variant,
  className,
  style,
  textStyle = 'normal',
  ref,
}: TypographyProps) => {
  const textStyleClass = textStyle === 'italic' ? 'typography--italic' : '';
  const commonProps = {
    className: `typography typography__${variant} ${className} ${textStyleClass}`,
    style: style,
    ref: ref,
  };
  switch (variant) {
    case 'title':
      return <h1 {...commonProps}>{children}</h1>;
    case 'subtitle':
      return <h2 {...commonProps}>{children}</h2>;
    case 'body':
      return <p {...commonProps}>{children}</p>;
    case 'caption':
      return <span {...commonProps}>{children}</span>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;
