import React, {FC} from "react";
import styled from "@emotion/styled";

const DisplayStyled = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
`;

const Display: FC = () => {
    return <DisplayStyled>
        <p>Временный макет дисплея</p>
    </DisplayStyled>
};

export default Display;