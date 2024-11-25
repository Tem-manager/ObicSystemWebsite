

import StatusCard from "./StatusCard";
import { statusData } from "./statusData";
import StatusList from "./StatusList";


function Status() {
    return (
        <><div className="relative h-screen flex mt-6">
            <div className="flex-grow ml-[50px] p-4 ">
                <div className="flex h-full space-x-4">
                    <div className="w-[50%] flex-shrink-0  overflow-y-auto border border-white">
                        
                        <StatusCard />
                     <StatusList statusData={statusData} />
                    </div>

                    <div className="w-[70%] flex-shrink-0 p-4 rounded-lg overflow-y-auto">
                        <h2 className="text-lg font-semibold text-[#192745]">
                            الجزء الثاني
                        </h2>
                        <p>
                            هذا المحتوى في الجزء الثاني الذي يأخذ 70% من مساحة الأحمر. <br />
                            يمكنك إضافة محتوى هنا وسيظل الحجم ثابتًا.
                        </p>
                    </div>
                </div>
            </div>
        </div></>
      );
}

export default Status;
