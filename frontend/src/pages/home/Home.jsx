import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/sidebar/messages/MessageContainer"

const Home = () => {
    return (
      <div className="flex sm:h-[45-px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-1g bg-opacity-0">
        <Sidebar/>
        <MessageContainer></MessageContainer>
      </div>
    )
  }
  
  export default Home