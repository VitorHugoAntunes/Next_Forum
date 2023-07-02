import { TopicContainer, TopicInfo, VotesDiv, TopicContent } from "./styles";

import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa'
import Image from "next/image";
import Link from "next/link";

export default function Topic() {
    return (
        <TopicContainer>
            <VotesDiv>
                <FaArrowUp size={20} />
                <span>56</span>
                <FaArrowDown size={20} />
            </VotesDiv>
            <div>
                <TopicContent>
                    <h2>Topic Title</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </TopicContent>

                <TopicInfo>
                    <div>
                        <Image
                            src={"https://avatars.githubusercontent.com/u/51717305?s=400&v=4"}
                            alt=""
                            width={20}
                            height={20}
                        />
                        <p>Postado por <Link href={""}>Vitor Hugo</Link></p>
                        <span>12h ago</span>
                    </div>
                    <div>
                        <FaCommentAlt size={18} />
                        <span>50+</span>
                    </div>
                </TopicInfo>
            </div>
        </TopicContainer>
    )
}