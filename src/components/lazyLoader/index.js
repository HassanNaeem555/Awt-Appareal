import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LazyLoader = ({ height }) => {
  return (
    <div className="collection-box">
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
        <div className="image">
          <Skeleton count={1} height={height} />
        </div>
        <div className="content">
          <Skeleton count={1} height={70} width={200} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default LazyLoader;
