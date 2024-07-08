import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 border border-[#E8E8E8] p-10">
            <img className="w-28 mb-6" src={logo} alt="" />
            <div>
                <h2 className="card-title text-2xl font-extrabold mb-2">{job_title}</h2>
                <p className="text-xl font-semibold text-[#757575] mb-4">{company_name}</p>
                <div className="flex gap-4 mb-4">
                    <button className="font-extrabold text-[#7E90FE] to-[#9873FF] px-5 py-2 border border-[#7E90FE] rounded">Remote</button>
                    <button className="font-extrabold text-[#7E90FE] to-[#9873FF] px-5 py-2 border border-[#7E90FE] rounded">Full Time</button>
                </div>
                <div className="flex gap-7 mb-6 text-xl font-semibold text-[#757575]">
                    <div className="flex gap-2 items-center">
                        <img src="/assets/icons/Location.png" alt="" />
                        <p>{location}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="/assets/icons/money.png" alt="" />
                        <p>{salary}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary bg-[#7E90FE] to-[#9873FF] text-white text-xl font-extrabold border-none">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;