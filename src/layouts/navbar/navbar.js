import { Box } from '@material-ui/core';
import styled from "styled-components";
import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, walletConnect, trustWallet, binance_wallet } from "../../utils/connectors";
import { FaWallet, FaMoon } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
    const DESKTOP_CONNECTORS = {
        MetaMask: injected,
        WalletConnect: walletConnect,
        BinanceWallet: binance_wallet,
        TrustWallet: trustWallet,
    };
    const walletConnectors = DESKTOP_CONNECTORS;
    const { account, active, activate } = useWeb3React();
    const connect = async (currentConnector) => {
        try {
            await activate(walletConnectors[currentConnector]);
            window.localStorage.setItem("CurrentWalletConnect", currentConnector);
        }
        catch (e) {
            console.log(e);
        }
    }

    const set_account_addr = (addr) => {
        return addr.slice(0, 6) + "..." + addr.slice(-4);
    }

    useEffect(() => {
        const currentWalletState = window.localStorage.getItem("CurrentWalletConnect");
        currentWalletState && activate(walletConnectors[currentWalletState]);
    }, [])

    return (
        <StyledComponent>
            <ConnectWalletBtn onClick={() => {
                connect("MetaMask");
            }}>{active ? set_account_addr(account) : <><FaWallet /><Box display={"flex"} ml={"10px"}>Wallet</Box></>}</ConnectWalletBtn>
            <CustomBtn1>
                <FaMoon />
            </CustomBtn1>
            <CustomBtn1>
                <MdLanguage />
            </CustomBtn1>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(57,72,94);
`

const ConnectWalletBtn = styled(Box)`
    display: flex;
    width: 120px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    background-color: rgb(34,37,46);
    color: white;
    transition: .3s;
    &:hover{
        cursor: pointer;
        box-shadow: 3px 3px 3px rgb(255 255 255 / 30%);
    }
`

const CustomBtn1 = styled(Box)`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    background-color: rgb(34,37,46);
    color: white;
    transition: .3s;
    &:hover{
        cursor: pointer;
        box-shadow: 3px 3px 3px rgb(255 255 255 / 30%);
    }
`

export default Navbar;
