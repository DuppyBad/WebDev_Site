import React, { useState } from "react";
import HeadText from "@/shared/HeadText";
import BigButton from "@/shared/BigButton";
// Thankfully Date is a real type
type Job = {
  name: string;
  description: string;
  deadline: Date;
};

// Another username definition, checks to see if they're logged in, if not, kicks them out
interface props {
  username: string | null;
}

const JobRequestForm = () => {
  const [job, setJob] = useState<Job>({
    name: "",
    description: "",
    deadline: new Date(),
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can save the job request using the `job` object
    console.log(job);
  };

  // Slightly ugly handling, handle more gracefully
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJob((prevJob) => ({
      ...prevJob,
      deadline: new Date(value),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jobName" className="flex-auto">
        Job Name:
      </label>
      <input
        id="jobName"
        type="text"
        name="name"
        value={job.name}
        onChange={handleInputChange}
      />

      <label htmlFor="jobDescription">Description:</label>
      <textarea
        id="jobDescription"
        name="description"
        value={job.description}
        onChange={handleInputChange}
      />

      <label htmlFor="jobDeadline">Deadline:</label>
      <input
        id="jobDeadline"
        type="date"
        name="deadline"
        value={job.deadline.toISOString().substr(0, 10)}
        onChange={handleDeadlineChange}
      />
      <button
        type="submit"
        className="text-md mx-auto rounded-lg bg-rosePine-love px-10 py-2 hover:bg-rosePineDawn-love hover:text-rosePine-text"
      >
        Submit Job
      </button>
    </form>
  );
};
// toISOString isn't too well documented, maybe switch method

export default JobRequestForm;
