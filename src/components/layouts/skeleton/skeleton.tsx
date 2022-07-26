import "./skeleton.scss";

type TSkeletonProps = {
  classes?: string;
};

const Skeleton: React.FC<TSkeletonProps> = ({ classes }) => {
  return <div className={`skeleton ${classes}`}></div>;
};

export default Skeleton;
