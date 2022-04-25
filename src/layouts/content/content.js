import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import {RiErrorWarningLine} from "react-icons/ri";

const Content = () => {
    return (
        <StyledComponent>
            <Navbar />
            <PageLink>
                <EachLink>Overview</EachLink>
                <EachLink>Treasury</EachLink>
                <EachLink>Revenue</EachLink>
                <EachLink>Olympus Pro</EachLink>
                <EachLink>Proteus</EachLink>
            </PageLink>
            <Statistics>
                <EachState>
                    <TxtUp01>Market Cap</TxtUp01>
                    <TxtDown01>$439,3992,915</TxtDown01>
                </EachState>
                <EachState>
                    <TxtUp01>OHM Price</TxtUp01>
                    <TxtDown01>$25.43</TxtDown01>
                </EachState>
                <EachState>
                    <TxtUp01>gOHM Price<RiErrorWarningLine/></TxtUp01>
                    <TxtDown01>$3,863.28</TxtDown01>
                </EachState>
                <EachState>
                    <TxtUp01>Circulating Supply(total)</TxtUp01>
                    <TxtDown01>17,265,123 / 19,395,167</TxtDown01>
                </EachState>
                <EachState>
                    <TxtUp01>Liquid Backing per OHM<RiErrorWarningLine/></TxtUp01>
                    <TxtDown01>$17.25</TxtDown01>
                </EachState>
                <EachState>
                    <TxtUp01>Current Index<RiErrorWarningLine/></TxtUp01>
                    <TxtDown01>128.47 sOHM</TxtDown01>
                </EachState>
            </Statistics>
            <GraphGroup>
                <GraoupEach>
                    <TitlePart01></TitlePart01>
                </GraoupEach>
                <GraoupEach></GraoupEach>
                <GraoupEach></GraoupEach>
                <GraoupEach></GraoupEach>
                <GraoupEach></GraoupEach>
                <GraoupEach></GraoupEach>
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

`
const Statistics = styled(Box)`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 80%;
    height: 200px;
    margin-top: 50px;
    border-radius: 10px;
    background-color: rgb(32,38,46);
`
const EachState = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TxtUp01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(163,163,163);
    font-size: 1.2rem;
    font-weight: 500;
`
const TxtDown01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
`
const GraphGroup = styled(Box)`
    display: grid;
    grid-template-columns: auto auto;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
    row-gap: 1em;
    column-gap: 1em;
`
const GraoupEach = styled(Box)`
    display: flex;
    width: 100%;
    height: 350px;
    flex-direction: column;
    border-radius: 10px;
    background-color: rgb(32,38,46);
`
const TitlePart01 = styled(Box)`
    display: flex;
    
`

export default Content;
