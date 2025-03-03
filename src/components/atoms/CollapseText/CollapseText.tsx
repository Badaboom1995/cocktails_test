import React, { useState, useRef, useEffect } from "react";
import "./CollapseTextStyles.scss";
import Typography from "@/components/atoms/Typography";

type CollapseTextProps = {
  children: React.ReactNode;
  maxHeight?: number;
};

const CollapseText: React.FC<CollapseTextProps> = ({
  children,
  maxHeight = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const actualHeight = textRef.current.scrollHeight;
      setShouldShowButton(actualHeight > maxHeight);
    }
  }, [maxHeight, children]);

  return (
    <div className="collapse-text">
      <Typography
        ref={textRef}
        style={{ maxHeight: isExpanded ? "none" : `${maxHeight}px` }}
        className="collapse-text__text"
        variant="body"
      >
        <span>{children}</span>
      </Typography>
      {shouldShowButton && (
        <button
          className="collapse-text__button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default CollapseText;
