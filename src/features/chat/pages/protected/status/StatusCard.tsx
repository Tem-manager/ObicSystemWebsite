import CircleImage from "../../../Components/Ui/CircleImage";
import ListTitle from "../../../Components/Ui/ListTitle";


function StatusCard() {
    return (
        <div className=" mb-5 w-full max-w-sm mx-auto bg-gray-100 shadow-lg  p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Status</h2>
            <div className="flex items-center space-x-4">
              {/* Plus Icon */}
                <button className="w-6 h-6 flex items-center justify-center bg-gray-200   text-gray-700 rounded-full hover:bg-gray-300">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                    />
                    </svg>
                </button>
              {/* Three-Dot Menu */}
              <button className="w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        <ListTitle
         Title="My status" 
         imageComponent={<CircleImage 
                                size={12}
                                imageUrl={"https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                            />}
        subTitle="Click to add status update"
        showIcon={true}
        />
          
        </div>
      );
}

export default StatusCard;
