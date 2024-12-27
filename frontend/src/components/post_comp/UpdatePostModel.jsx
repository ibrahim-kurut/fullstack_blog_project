
import { IoMdCloseCircle } from "react-icons/io";

const UpdatePostModel = ({ setOpenUpdateModel, updatePost }) => {


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
            <div className="w-[90%] md:w-1/2 h-fit bg-gray-700 rounded relative p-4">
                {/* close icon */}
                <div className="flex justify-end m-2 text-red-500 cursor-pointer">
                    <IoMdCloseCircle size={25} onClick={() => setOpenUpdateModel(false)} />
                </div>
                {/* update form*/}
                <div className="flex flex-col gap-4">
                    <h2>{updatePost.title}</h2>
                </div>

            </div>
        </div>
    );
}

export default UpdatePostModel;