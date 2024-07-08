import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have applied successfully');
    }
    return (
        <div className="my-10">
            <div className="grid grid-cols-4 gap-6">
                <div className="grid col-span-3 border p-4">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, temporibus!</p>
                </div>
                <div className="grid col-span-1 border p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minima?</p>
                    <button onClick={handleApplyJob} className="btn bg-[#7E90FE] text-white">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;