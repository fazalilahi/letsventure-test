import Data from "../jobs/jobs.json";
import Job from "./Job";

const Jobs = () => {
  return (
    <div className="rounded-md m-1 grid grid-cols-1">
      {Data?.map((item) => (
        <Job key={item._id} job={item} />
      ))}
    </div>
  );
};

export default Jobs;
