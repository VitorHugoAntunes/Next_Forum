import { FaPlus } from "react-icons/fa";
import { SideBarContainer, TopUsersDiv } from "./styles";
import TopUser from "./TopUser";

export default function SideBar() {
    return (
        <SideBarContainer>
            <button>
                <FaPlus size={18} />
                Start a new topic
            </button>

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