import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import Img_OlympusMark01 from "../../assets/olympus_mark01.png";
import { useWeb3React } from "@web3-react/core";
import { GiArchBridge, GiMushroom } from 'react-icons/gi';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { RiBug2Fill, RiMacbookLine, RiGovernmentLine } from 'react-icons/ri';
import { FaGithub, FaTwitter, FaDiscord, FaMedium } from 'react-icons/fa';

const Sidebar = () => {
    const { account,active } = useWeb3React();
    return (
        <StyledComponent>
            <MarkImg>
                <img src={Img_OlympusMark01} alt="" width={"60px"}></img>
            </MarkImg>
            <MarkLetter>
                Olympus
            </MarkLetter>
            <TxtWalletAddress>{active === true?account.slice(0,6)+"..."+account.slice(-4):"Connect Wallet"}</TxtWalletAddress>
            <LinkList>
                <EachLink>
                    <RiMacbookLine fontSize={"1.5rem"} />
                    <EachLinkTxt >Wrap</EachLinkTxt>
                </EachLink>
                <EachLink>
                    <GiArchBridge fontSize={"1.5rem"} />
                    <EachLinkTxt >Bridge</EachLinkTxt>
                </EachLink>
                <EachLink>
                    <BiMessageDetail fontSize={"1.5rem"} />
                    <EachLinkTxt >Forum</EachLinkTxt>
                </EachLink>
                <EachLink>
                    <RiGovernmentLine fontSize={"1.5rem"} />
                    <EachLinkTxt >Governance</EachLinkTxt>
                </EachLink>
                <EachLink>
                    <BiBook fontSize={"1.5rem"} />
                    <EachLinkTxt >Docs</EachLinkTxt>
                </EachLink>
                <EachLink>
                    <RiBug2Fill fontSize={"1.5rem"} />
                    <EachLinkTxt >Bug Bounty</EachLinkTxt>
                </EachLink>
                <EachLink>
                    <GiMushroom fontSize={"1.5rem"} />
                    <EachLinkTxt >Grants</EachLinkTxt>
                </EachLink>
            </LinkList>
            <ContactList>
                <Box display={"flex"} width="200px">
                    <ContactBox><FaGithub /></ContactBox>
                    <ContactBox><FaMedium /></ContactBox>
                    <ContactBox><FaTwitter /></ContactBox>
                    <ContactBox><FaDiscord /></ContactBox>
                </Box>

            </ContactList>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    position: relative;
    width: 350px;
    /* height: 100%; */
    flex-direction: column;
    align-items: center ;
    background-color: rgb(40,45,58);
    @media (max-width: 1000px) {
        display: none;
    }
`
const MarkImg = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const MarkLetter = styled(Box)`
    display: flex;
    justify-content: content;
    margin-top: 10px;
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
`
const TxtWalletAddress = styled(Box)`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 1rem;
    margin-top: 5px;
`
const LinkList = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: white;
    margin-top: 30px;
`
const EachLink = styled(Box)`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 30px;
    align-items: center;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
    }
`
const EachLinkTxt = styled(Box)`
    display: flex;
    margin-left: 15px;
    font-size: 1rem;
`

const ContactList = styled(Box)`
    display: flex;
    position: fixed;
    bottom: 15px;
    min-width: 300px;
    left: 0px;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: rgb(104,106,116);
`

const ContactBox = styled(Box)`
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
    }
`
export default Sidebar;
