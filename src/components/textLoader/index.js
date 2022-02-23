import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TextLoader = ({ height, width }) => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className="image my-2">
        <Skeleton count={1} height={height} width={width} />
      </div>
    </SkeletonTheme>
  );
};

export default TextLoader;
