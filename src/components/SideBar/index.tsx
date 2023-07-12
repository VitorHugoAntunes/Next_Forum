import { TopicModalContext } from '@/contexts/TopicModalContext';
import { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import ButtonComponent from '../Button';
import TopicModal from '../TopicModal';
import { SideBarContainer, TopUsersDiv } from "./styles";
import TopUser from "./TopUser";

export default function SideBar() {
    const { changeModalStatus } = useContext(TopicModalContext)

    return (
        <SideBarContainer>
            <TopicModal />
            <ButtonComponent category={'neutral'} onClick={changeModalStatus}>
                <FaPlus size={18} />
                Start a new topic
            </ButtonComponent>

            <TopUsersDiv>
                <h3>Top Users</h3>
                <div className="topUsers">
                    <TopUser />
                    <TopUser />
                    <TopUser />
                    <TopUser />
                    <TopUser />
                </div>
                <div>
                    <TopUser />
                </div>
            </TopUsersDiv>
        </SideBarContainer>
    )
}