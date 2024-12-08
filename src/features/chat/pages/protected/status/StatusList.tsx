import React, { useState } from 'react';
import ListTitle from '../../../Components/Ui/ListTitle';
import ImageStatus from '../../../Components/Ui/imageStatus';
import { StatusModel } from './StatusModel';
import Dialog from '../../../Components/Ui/Dialog';
import StoryViewer from './StoryViewer';
import { StoresData } from './StoresData';
import UsersFooter from './UsersFooter';

interface Props {
  statusData: StatusModel[];
}

const StatusList: React.FC<Props> = ({ statusData }) => {
  const [isStoryViewerOpen, setStoryViewerOpen] = useState(false);

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
    setStoryViewerOpen(true)
  };

  const closeDialog = () => {
    setStoryViewerOpen(false);
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
                    hoverBg='hover:bg-gray-200'
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
{/* 
      {dialogOpen && (
        <Dialog 
          onClose={closeDialog} 
        >
          <StoryViewer stories={StoresData} footer={<UsersFooter/>} />
        </Dialog>
    )} */}

  <Dialog isOpen={isStoryViewerOpen} onClose={closeDialog}>
    <StoryViewer stories={StoresData} footer={<UsersFooter/>} />
        </Dialog>

    </div>
  );
};

export default StatusList;
