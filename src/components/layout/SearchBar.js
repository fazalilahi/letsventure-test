import { useState } from "react";

import Data from "../../jobs/jobs.json";
import Job from "../Job";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [jobsFiltered, setJobsFiltered] = useState(Data);

  const handleInputChange = (e) => {
    //sets search string
    const searchStr = e.target.value.toLowerCase();
    setSearchValue(searchStr);

    //filter notes
    let filteredJobs = getFilteredJobs(searchStr);
    setJobsFiltered(filteredJobs);
  };

  const getFilteredJobs = (searchStr) => {
    return Data?.filter((item) =>
      item.position.toLowerCase().includes(searchStr)
    );
  };

  return (
    <div className="">
      <div className="flex justify-center pt-8 pb-2 bg-gray rounded-md">
        <input
          type="text"
          className="p-2 px-4 w-9/12 focus:outline-none"
          name="search"
          placeholder="Search"
          onChange={handleInputChange}
          value={searchValue}
          autoFocus
        />
      </div>
      {/* jobs: filtered */}
      <div className="rounded-md m-1 grid grid-cols-1">
        {jobsFiltered?.map((item) => (
          <Job key={item._id} job={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
