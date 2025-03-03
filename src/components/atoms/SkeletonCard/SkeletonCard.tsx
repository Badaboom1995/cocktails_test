import React from "react";
import "./SkeletonCardStyles.scss";

type SkeletonCardProps = {
  width?: string;
  height?: string;
};

const SkeletonCard: React.FC<SkeletonCardProps> = ({ width, height }) => {
  return <div className="skeleton-card" style={{ width, height }}></div>;
};

export default SkeletonCard;
