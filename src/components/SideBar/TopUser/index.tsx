import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function TopUser() {
    return (
        <div className="topUser">
            <div>
                <Image
                    src={"https://avatars.githubusercontent.com/u/51717305?s=400&v=4"}
                    alt=""
                    width={20}
                    height={20}
                />
                <Link href={"/"}>Vitor Hugo</Link>
            </div>
            <div>
                <span>1.1k</span>
                <FaArrowUp size={18} />
            </div>
        </div>
    )
}