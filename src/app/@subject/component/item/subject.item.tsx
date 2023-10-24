import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import WorkList from "../list/work.list";

interface Props {
    subject: string;
    img: string;
}

const ItemWrapper = styled.div`
    position: relative;
    > div.title {
        width: 100%;
        height: 20vh;
        box-sizing: border-box;
        border: 2px solid white;
        overflow-x: hidden;
        overflow-y: hidden;
        > img {
            width: 100%;
            height: 100%;
        }
    
        > p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-weight: 600;
            font-size: 4.5vh;
        }
    
        > div.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.3;
        }
    }

    > div.list-wrapper {
        width: 100%;
        height: 42vh;
        > div:nth-child(1) {
            width: 100%;
            height: 20vh;
            margin-top: 0.5vh;
            box-sizing: border-box;
            border: 2px solid white;
            overflow-x: hidden;
            overflow-y: hidden;
            > img {
                width: 100%;
                height: 100%;
            }
            > p {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-weight: 600;
                font-size: 4.5vh;
            }
        }
        > div:nth-child(2) {
            width: 100%;
            height: 40vh;
            margin-top: 0.5vh;
        }
    }
`

const SubjectItem = (props: Props) => {

    const [whileHover, setWhileHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <ItemWrapper>
            {!isClicked && <motion.div className="title"
                initial={{ scaleY: 0.05, y: "-9.5vh" }}
                animate={{ scaleY: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => { setWhileHover(true) }}
                onHoverEnd={() => { setWhileHover(false) }}
                onTap={() => {
                    setIsClicked(!isClicked);
                }}
            >
                {!whileHover && <div className="overlay"></div>}
                <p>{props.subject}</p>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={props.img} />
            </motion.div>}
            {isClicked && <div className="list-wrapper">
                <motion.div
                    initial={{ scaleY: 1, y: 0 }}
                    animate={{ scaleY: 0.05, y: "-9.5vh" }}
                    transition={{ duration: 0.5 }}
                    onTap={() => {
                        setIsClicked(!isClicked);
                    }}
                >
                    <p>{props.subject}</p>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={props.img} />
                </motion.div>
                <motion.div
                    initial={{ scaleY: 0, y: "-38vh" }}
                    animate={{ scaleY: 1, y: "-19vh" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    <WorkList />
                </motion.div>
            </div>}
        </ItemWrapper>
    )
}

export default SubjectItem;