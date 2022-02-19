import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ImageLoader = ({ height }) => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className="image">
        <Skeleton count={1} height={height} />
      </div>
    </SkeletonTheme>
  );
};

export default ImageLoader;
