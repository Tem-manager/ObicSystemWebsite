import {  CameraAlt, MoreVert,  QrCodeScanner, Search } from "@mui/icons-material";
import Header from "../../chat/Components/Partials/Header";
import PageContent from "./PageContent";
function ServicesLayout() {
  

  return (
    <div className="flex-grow ">
       <Header
        // leftContent={<div className="text-[#192745] text-xl font-semibold">OBIC</div>}
        rightContent={
          <>
            <button type="button">
              <QrCodeScanner  />
            </button>
            
            <button type="button">
              <Search  />
            </button>
            
            <button type="button">
              <CameraAlt  />
            </button>
            
            <button type="button">
              <MoreVert 
               />
            </button>

          </>
        }
      />
      <PageContent />
    </div>
  );
}

export default ServicesLayout;
