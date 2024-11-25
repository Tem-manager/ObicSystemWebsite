import React from 'react';
import ListTitle from '../../../Components/Ui/ListTitle';
import ImageStatus from '../../../Components/Ui/imageStatus';
import { StatusModel } from './StatusModel';



interface Props {
  statusData: StatusModel[];
}

const StatusList: React.FC<Props> = ({ statusData }) => {
  // Group items by `statusType`
  const groupedData = statusData.reduce<Record<string, StatusModel[]>>((acc, item) => {
    if (!acc[item.statusType]) {
      acc[item.statusType] = [];
    }
    acc[item.statusType].push(item);
    return acc;
  }, {});

  return (
    <div className="w-full mt-3 max-w-sm mx-auto bg-gray-100 shadow-lg p-4">
      <div className="relative h-screen flex mt-6">
        <ul>
          {Object.entries(groupedData).map(([statusType, items]) => (
            <React.Fragment key={statusType}>
              {/* Render title for the status group */}
              <li className="mb-2 font-bold text-gray-700">{statusType}</li>
              {items.map((item) => (
                <li className="mb-5" key={item.statusid}>
                  <ListTitle
                    Title={item.username}
                    subTitle={item.time}
                    imageComponent={<ImageStatus images={item.Urlimage} />}
                  />
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatusList;
