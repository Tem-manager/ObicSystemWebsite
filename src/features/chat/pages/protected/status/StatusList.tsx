import React, { useState } from 'react';
import ListTitle from '../../../Components/Ui/ListTitle';
import ImageStatus from '../../../Components/Ui/imageStatus';
import { StatusModel } from './StatusModel';
import { IoClose } from "react-icons/io5";
import StatusBadge from '../../../../../Components/ui/StatusBadge';
import Dialog from '../../../Components/Ui/Dialog';
import StoryViewer from './StoryViewer';
import { StoresData } from './StoresData';

interface Props {
  statusData: StatusModel[];
}

const StatusList: React.FC<Props> = ({ statusData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStatusId, setSelectedStatusId] = useState<number | null>(null);

  const groupedData = statusData.reduce<Record<string, StatusModel[]>>((acc, item) => {
    if (!acc[item.statusType]) {
      acc[item.statusType] = [];
    }
    acc[item.statusType].push(item);
    return acc;
  }, {});

  const handleListTitleClick = (statusid: number) => {
    setSelectedStatusId(statusid);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedStatusId(null);
  };

  return (
    <div className="w-full mt-3 max-w-sm mx-auto bg-gray-100 shadow-lg p-4">
      <div className="relative h-screen flex mt-6">
        <ul>
          {Object.entries(groupedData).map(([statusType, items]) => (
            <React.Fragment key={statusType}>
              <li className="mb-2 font-bold text-gray-700">{statusType}</li>
              {items.map((item) => (
                <li className="mb-5" key={item.statusid}>
                  <ListTitle
                    Title={item.username}
                    subTitle={item.time}
                    imageComponent={<ImageStatus images={item.Urlimage} />}
                    onClick={() => handleListTitleClick(item.statusid)}
                  />
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>

      {dialogOpen && (
        <Dialog 
          onClose={closeDialog} 
        >
          <StoryViewer stories={StoresData} />
        </Dialog>
    )}

    </div>
  );
};

export default StatusList;
