const Job = ({ job }) => {
  const {
    position,
    companyLogo,
    companyName,
    location,
    jobType,
    experienceRange,
    requiredSkills,
    createdAt,
  } = job;

  return (
    <table className="m-2 bg-white rounded-md p-2">
      <tr className="flex">
        <td className="rounded-md bg-blue-50 p-1 flex justify-center mx-1 w-2/12">
          <img src={companyLogo} className="h-6" />
        </td>
        <td className="mx-1 w-2/12">
          <div>{position}</div>
          <div className="text-gray-400">{companyName}</div>
        </td>
        <td className="mx-1 w-2/12">
          <div>{location}</div>
          <p className="text-gray-400">Location</p>
        </td>
        <td className="mx-1 w-1/12">
          {experienceRange.min} - {experienceRange.max} years
          <p className="text-gray-400">Experience</p>
        </td>
        <td className="mx-1 overflow-hidden w-4/12">
          {requiredSkills.join(",")}
          <p className="text-gray-400">Skills</p>
        </td>
        <td className="mx-1 px-4 flex items-center text-blue-100 w-1/12">
          <button className="bg-blue-900 p-1 px-4 rounded-md">Apply</button>
        </td>
      </tr>
    </table>
  );
};

export default Job;
