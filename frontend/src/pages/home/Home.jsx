import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-slate-500'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
