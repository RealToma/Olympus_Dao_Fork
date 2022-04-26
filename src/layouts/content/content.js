import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import { RiErrorWarningLine } from "react-icons/ri";

const Content = () => {
    return (
        <StyledComponent>
            <Navbar />
            <PageLink>
                <EachLink>Overview</EachLink>
                <EachLink>Faucet</EachLink>
                <EachLink>Rebase</EachLink>
                <EachLink>Reservoir</EachLink>
                <EachLink>Downline</EachLink>
            </PageLink>
            <Statistics>
                <EachState>
                    <TextUp01>Market Cap</TextUp01>
                    <TextDown01>$439,3992,915</TextDown01>
                </EachState>
                <EachState>
                    <TextUp01>OHM Price</TextUp01>
                    <TextDown01>$25.43</TextDown01>
                </EachState>
                <EachState>
                    <TextUp01>gOHM Price<RiErrorWarningLine /></TextUp01>
                    <TextDown01>$3,863.28</TextDown01>
                </EachState>
                <EachState>
                    <TextUp01>Circulating Supply(total)</TextUp01>
                    <TextDown01>17,265,123 / 19,395,167</TextDown01>
                </EachState>
                <EachState>
                    <TextUp01>Liquid Backing per OHM<RiErrorWarningLine /></TextUp01>
                    <TextDown01>$17.25</TextDown01>
                </EachState>
                <EachState>
                    <TextUp01>Current Index<RiErrorWarningLine /></TextUp01>
                    <TextDown01>128.47 sOHM</TextDown01>
                </EachState>
            </Statistics>
            <GraphGroup>
                <GraoupEach>
                    <TitlePart01>
                        <LeftText01>Total Value Deposited<Box display={"flex"} ml={"1%"}><RiErrorWarningLine /></Box></LeftText01>
                        <RightText01><RiErrorWarningLine /></RightText01>
                    </TitlePart01>
                    <TitlePart02>$355,213,637<Box display={"flex"} color={"rgb(163,163,163)"} ml={"1%"}>Today</Box></TitlePart02>
                </GraoupEach>
                <GraoupEach>
                    <TitlePart01>
                        <LeftText01>Market Value of Treasurey Assets<Box display={"flex"} ml={"1%"}><RiErrorWarningLine /></Box></LeftText01>
                        <RightText01><RiErrorWarningLine /></RightText01>
                    </TitlePart01>
                    <TitlePart02>$355,213,637<Box display={"flex"} color={"rgb(163,163,163)"} ml={"1%"}>Today</Box></TitlePart02>
                </GraoupEach>                <GraoupEach>
                    <TitlePart01>
                        <LeftText01>Risk Value of Treasurey Assets<Box display={"flex"} ml={"1%"}><RiErrorWarningLine /></Box></LeftText01>
                        <RightText01><RiErrorWarningLine /></RightText01>
                    </TitlePart01>
                    <TitlePart02>$355,213,637<Box display={"flex"} color={"rgb(163,163,163)"} ml={"1%"}>Today</Box></TitlePart02>
                </GraoupEach>                <GraoupEach>
                    <TitlePart01>
                        <LeftText01>Protocol Owned Liquidity OHM-DAI<Box display={"flex"} ml={"1%"}><RiErrorWarningLine /></Box></LeftText01>
                        <RightText01><RiErrorWarningLine /></RightText01>
                    </TitlePart01>
                    <TitlePart02>$355,213,637<Box display={"flex"} color={"rgb(163,163,163)"} ml={"1%"}>Today</Box></TitlePart02>
                </GraoupEach>                <GraoupEach>
                    <TitlePart01>
                        <LeftText01>Total Value Deposited<Box display={"flex"} ml={"1%"}><RiErrorWarningLine /></Box></LeftText01>
                        <RightText01><RiErrorWarningLine /></RightText01>
                    </TitlePart01>
                    <TitlePart02>$355,213,637<Box display={"flex"} color={"rgb(163,163,163)"} ml={"1%"}>Today</Box></TitlePart02>
                </GraoupEach>                <GraoupEach>
                    <TitlePart01>
                        <LeftText01>Total Value Deposited<Box display={"flex"} ml={"1%"}><RiErrorWarningLine /></Box></LeftText01>
                        <RightText01><RiErrorWarningLine /></RightText01>
                    </TitlePart01>
                    <TitlePart02>$355,213,637<Box display={"flex"} color={"rgb(163,163,163)"} ml={"1%"}>Today</Box></TitlePart02>
                </GraoupEach>
            </GraphGroup>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: rgb(57,72,94);
    /* overflow-y: scroll; */
`
const PageLink = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
    @media (max-width: 500px) {
        overflow-x: scroll;
    }
`
const EachLink = styled(Box)`
    display: flex;
    margin-left: 1%;
    margin-right: 1%;
    color: rgb(166,175,200);
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: underline 0.15em rgba(249,205,128, 0);
    transition: text-decoration-color 300ms;
    &:hover{
        text-decoration-color: rgba(249,205,128,1);
        cursor: pointer;
        color: rgb(249,205,128);
        /* border-bottom: 1px solid rgb(249,205,128); */
    }
    @media (max-width: 800px) {
        transition: 0.5s;
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        transition: 0.5s;
        font-size: 1rem;
    }
    @media (max-width: 400px) {
        transition: 0.5s;
        font-size: 0.8rem;
    }

`
const Statistics = styled(Box)`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 80%;
    height: 200px;
    margin-top: 50px;
    border-radius: 10px;
    background-color: rgb(32,38,46);
    @media (max-width: 700px) {
        transition: 0.5s;
        grid-template-columns: auto auto;
    }
    @media (max-width: 500px) {
        transition: 0.5s;
        grid-template-columns: auto;
        height: 320px;
    }
`
const EachState = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TextUp01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(163,163,163);
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 1rem;
    }
    @media (max-width: 800px) {
        transition: 0.5s;
        font-size: 0.8rem;
    }
`
const TextDown01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 1.2rem;
    }
    @media (max-width: 800px) {
        transition: 0.5s;
        font-size: 1rem;
    }
`
const GraphGroup = styled(Box)`
    display: grid;
    grid-template-columns: auto auto;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
    row-gap: 1em;
    column-gap: 1em;
    @media (max-width: 800px) {
        transition: 0.5s;
        grid-template-columns: auto;
    }
`
const GraoupEach = styled(Box)`
    display: flex;
    width: 100%;
    height: 20vw;    //350px
    flex-direction: column;
    border-radius: 10px;
    background-color: rgb(32,38,46);
    @media (max-width: 1000px) {
        transition: 0.5s;
        height: 25vw;
    }
    @media (max-width: 800px) {
        transition: 0.5s;
        height: 50vw;
    }
`
const TitlePart01 = styled(Box)`
    display: flex;
    margin-top: 3%;

`
const TitlePart02 = styled(Box)`
    display: flex;
    margin-top: 1%;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    justify-content: flex-start;
    margin-left: 5%;
    align-items: 5%;
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 1rem;
    }
`

const LeftText01 = styled(Box)`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    color: rgb(163,163,163);
    font-size: 1rem;
    font-weight: 500;
    margin-left: 5%;
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 0.8rem;
    }
`

const RightText01 = styled(Box)`
    display: flex;
    justify-content: flex-end;
    flex: 0.3;
    align-items: center;
    color: rgb(163,163,163);
    font-size: 1rem;
    font-weight: 500;
    margin-right: 5%;
    @media (max-width: 1200px) {
        transition: 0.5s;
        font-size: 0.8rem;
    }
`


export const CustomBackdrop = styled(Box)`
    width: 100%;
    height: 100%;
    position: fixed;
    background: white;
    opacity: 0.6;
`

export default Content;
