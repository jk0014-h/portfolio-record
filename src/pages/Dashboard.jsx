import { DashboardLayout } from "../components/layout";
import { SJView, VTView, BSView, PPView } from "../components/views";

/**
 * 대시보드 메인 페이지 컴포넌트입니다.
 * 선택된 activeIndex에 따라 DashboardLayout 안에 적절한 View를 렌더링합니다.
 */
export default function Dashboard({ activeIndex, activeFloor, onFloorChange }) {
  
  /**
   * 인덱스에 따라 렌더링할 뷰 컴포넌트를 결정합니다.
   * NAV_ITEMS = ["SJ", "VT", "BS", "PP"]
   */
  const renderView = () => {
    switch (activeIndex) {
      case 0:
        return <SJView activeFloor={activeFloor} />;
      case 1:
        return <VTView />;
      case 2:
        return <BSView />;
      case 3:
        return <PPView />;
      default:
        return <SJView activeFloor={activeFloor} />;
    }
  };

  /**
   * 메뉴별 배경 이미지를 지정합니다.
   */
  const getBackgroundImage = () => {
    const images = [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // SJ
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', // VT
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop', // BS
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'  // PP
    ];
    return images[activeIndex] || images[0];
  };

  return (
    <DashboardLayout 
      bgImage={getBackgroundImage()} 
      activeIndex={activeIndex}
      activeFloor={activeFloor}
      onFloorChange={onFloorChange}
    >
      {renderView()}
    </DashboardLayout>
  );
}
