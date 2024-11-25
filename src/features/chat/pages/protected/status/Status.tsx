

import StatusCard from "./StatusCard";
import ImageStatus from "../../../Components/Ui/imageStatus";
import ListTitle from "../../../Components/Ui/ListTitle";
import { statusData } from "./statusData";


function Status() {
    return (
        <><div className="relative h-screen flex mt-6">
            <div className="flex-grow ml-[50px] p-4 ">
                <div className="flex h-full space-x-4">
                    <div className="w-[50%] flex-shrink-0  overflow-y-auto border border-white">
                        
                        <StatusCard />
                     <div className="w-full mt-3 max-w-sm mx-auto bg-gray-100 shadow-lg  p-4">
                        <div className="relative h-screen flex mt-6">
                            <ul>
                            {
                            statusData.map((item) => (
                                <li className="mb-5">
                                     <ListTitle
                                        key={item.id}
                                        Title={item.username}
                                        subTitle={item.time}
                                        imageComponent={
                                          <ImageStatus  images={item.imageUrls} />
                                        }
                               
                                />
                                </li>
                               
                        ))}

                            </ul>
                       
                        </div>
                     </div>
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
