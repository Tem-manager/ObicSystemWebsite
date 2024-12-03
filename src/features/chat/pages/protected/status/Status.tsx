

import StatusCard from "./StatusCard";
import { statusData } from "./statusData";
import StatusList from "./StatusList";


const Status: React.FC = () => {
    return (
        <><div className="relative h-screen flex mt-6">
            <div className="flex-grow ml-[50px] p-4 ">
                <div className="flex h-full space-x-4">
                    <div className=" w-full flex-shrink-0 overflow-y-scroll border border-white">
                        
                        <StatusCard />
                     <StatusList statusData={statusData} />
                    </div>

                   
                </div>
            </div>
        </div></>
      );
}

export default Status;
