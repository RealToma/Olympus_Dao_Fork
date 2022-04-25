import { Box } from '@material-ui/core';
import styled from "styled-components";
import React from "react";
import CustomInput from '../../components/CustomInput';
import CustomBtn from '../../components/CustomBtn';
import CustomSelect from '../../components/CustomSelect';
import Json_Coin from "../../data/coin.json";

const Content = () => {
    return (
        <StyledComponent>
            <FromBox>
                <UpPart01>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"90%"} marginBottom={"5%"} marginTop={"5%"}>
                        <LeftPart01>
                            <Box display={"flex"} fontSize={"1rem"} fontWeight={"600"} marginBottom="1%">
                                From
                            </Box>
                            <Box display={"flex"}>
                                <Box display={"flex"} flex={'2'} >
                                    <CustomInput width={"100%"} height={"40px"} fsize={"1.3rem"} fcolor={"black"} bgcolor={"#F9F9F9"} border={"1px solid #aCaCaC"} upletter={"From"} bradius={"8px"} />
                                </Box>
                                <Box display={"flex"} flex={'1'} justifyContent={"center"} alignItems={"center"}>
                                    <CustomBtn width={"70%"} height={"40px"} fsize={"1rem"} fcolor={"black"} bgcolor={"#F9F9F9"} border={"1px solid #aCaCaC"} str={"MAX"} bradius={"8px"} fweight={"700"} />
                                </Box>
                            </Box>
                        </LeftPart01>
                        <RightPart01>
                            <CustomSelect width={"80%"} height={"50px"} fsize={"1.2rem"} fcolor={"#aCaCaC"} bgcolor={"white"} border={"none"} bradius={"none"} fweight={"700"} date={Json_Coin}/>
                        </RightPart01>
                    </Box>
                </UpPart01>
                <DownPart01>
                    <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} width={"90%"} marginBottom={"5%"} marginTop={"5%"}>
                        Balance:0.07926
                    </Box>
                </DownPart01>
            </FromBox>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #F9F9F9;
`

const FromBox = styled(Box)`
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    border: 2px solid #aCaCaC;
`

const UpPart01 = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const DownPart01 = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
    border-top: 2px solid #aCaCaC;
    color: black;
`

const LeftPart01 = styled(Box)`
    display: flex;
    flex: 2;
    width: 100%;
    flex-direction: column;
    border-right: 2px solid #aCaCaC;
`

const RightPart01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export default Content;
