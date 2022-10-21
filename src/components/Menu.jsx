import React, { useState } from "react";
import styled from "styled-components";
import Youtube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* flex: 1.2; */
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0px;
  overflow-y: scroll;
  width: ${(props) => (props.changeWidth ? "75px" : "min-content")};

  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const Wrapper = styled.div`
  display: ${(props) => (props.changeWidth ? "none" : "min-content")};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  position: sticky;
  top: 0;
  height: 56px;
  padding: 0 26px 0px;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Img = styled.img`
  height: 25px;
  display: ${(props) => (props.hideImage ? "none" : "block")};
`;

const Item = styled.div`
  display: flex;
  flex-direction: ${(props) => props.sm && "column"};
  align-items: center;
  justify-content: ${(props) => props.sm && "center"};
  gap: 20px;
  cursor: pointer;
  font-size: ${(props) => props.sm && "11px"};
  padding: ${(props) => (props.sm ? "5px" : "7.5px 26px")};

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  padding: 0px 26px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
  padding: 0px 26px;
`;

const SmallMenu = styled.div`
  width: 50px;
`;

const Text = styled.span`
  display: ${(props) => (props.hideText ? "none" : "block")};
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container changeWidth={open}>
      <Logo>
        <MenuIcon onClick={() => setOpen(!open)} />
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Img hideImage={open} src={Youtube} />
          <Text hideText={open}>Youtube</Text>
        </Link>
      </Logo>

      {open && (
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Item sm>
              <HomeIcon />
              Home
            </Item>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            <Item sm>
              <ExploreOutlinedIcon />
              Explore
            </Item>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            <Item sm>
              <SlowMotionVideoIcon />
              Shorts
            </Item>
          </Link>
          <Link
            to="subscriptions"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Item sm>
              <SubscriptionsOutlinedIcon />
              Subscriptions
            </Item>
          </Link>
        </Wrapper>
      )}

      <Wrapper changeWidth={open}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SlowMotionVideoIcon />
            Shorts
          </Item>
        </Link>

        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          {/* <Link to="signin" style={{ textDecoration: "none" }}> */}
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
          {/* </Link> */}
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
