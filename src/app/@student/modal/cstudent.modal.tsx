import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vw;
    background-color: #AA000000;
`;

interface Props {
    isOpen: boolean
}

const CustomStudentModal = (props: Props) => {
    return (
        <Wrapper style={{
            display: props.isOpen ? 'block' : 'none'
        }}>

        </Wrapper>
    )
}

export default CustomStudentModal;