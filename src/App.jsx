import { useState } from "react";
import { Header } from './components';
import Dashboard from './pages/Dashboard';

function App() {
  // 앱 전역 상태 관리
  const [activeIndex, setActiveIndex] = useState(0);
  const [isConnected, setIsConnected] = useState(true);
  const [activeFloor, setActiveFloor] = useState("1B1F");

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0A0B10]">
      {/* Header receives state as props */}
      <Header 
        activeIdx={activeIndex} 
        setActiveIdx={setActiveIndex} 
        isConnected={isConnected} 
        setIsConnected={setIsConnected} 
      />
      
      {/* Dashboard receives global states */}
      <main className="flex-1 w-full overflow-hidden">
        <Dashboard 
          activeIndex={activeIndex} 
          activeFloor={activeFloor}
          onFloorChange={setActiveFloor}
        />
      </main>
    </div>
  );
}

export default App;
