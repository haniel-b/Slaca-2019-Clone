import styled from 'styled-components';

import background_img from '../../assets/background_img.svg';
import video_background from '../../assets/video_background.svg';

export const Container = styled.div`
  grid-area: BD;
  display: flex;

  align-items: left;
  margin: 0 auto;
  padding: 20px 44px 0 43px;

  flex-direction: column;
  width: 100%;
  max-height: 100vh;
`;

export const BodyTitleContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  padding: 43px 0 0 0;

  h1 {
    width: 786px;
    font-size: 20px;
    line-height: 25px;
    font-weight: 900;
    letter-spacing: 0.05em;
    color: #ed7839;
  }
`;

export const BodyTitleIcons = styled.div`
  display: flex;

  > img {
    width: 19px;
    margin-left: 8px;
    height: 31px;
    width: 43px;
    padding: 7px;
    background: #ed7839;
    border-radius: 4px;
  }
`;

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 31px;
  background: #ed7839;
  border-radius: 4px;

  img {
    width: 19px;
    height: 19px;
  }

  span {
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin-left: 5px;
  }

  button + button {
    width: 43px;
    height: 31px;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const VideoContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const VideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  padding: 30px 30px 52px 30px;

  background-image: url(${background_img});

  width: 783px;
  height: 439px;

  h1 {
    font-size: 24px;
    line-height: 25px;
    font-weight: 900;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  span {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.05em;

    color: #ffffff;
  }
`;

export const VideoFooter = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    background: #f5f5f5;
    border: 1px solid #ed7839;
    box-sizing: border-box;
  }

  div {
    margin-left: 20px;

    h1 {
      margin-bottom: 5px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 242px;
  border: 2px solid #f5f5f5;

  border-radius: 4px;
  font-family: Quicksand;

  height: 439px;

  > h1 {
    padding: 11px 15px 9px 15px;
    background: #fdf1eb;
    height: 45px;
    font-weight: 400;
    font-family: Roboto;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const DetailsContainer = styled.div`
  padding: 15px 22px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e7e7e7;
    border-radius: 4px;
  }
`;

export const Detail = styled.div`
  span {
    font-size: 12px;
    color: #ada0a0;
  }

  strong {
    font-size: 12px;
    font-weight: bold;
    color: #5c5c5c;
  }
`;

export const Actors = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  h1 {
    font-weight: bold;
    font-size: 14px;
  }

  span {
    color: #ada0a0;
    margin-top: 5px;
    font-size: 14px;
  }

  p {
    margin-top: 60px;
    font-size: 12px;
    color: #ada0a0;
    font-weight: regular;
  }

  p + p {
    margin-top: 5px;
  }
`;

export const Resume = styled.div`
  margin-top: 30px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 3px;

  > h1 {
    padding: 10px 15px;
    background: #fdf1eb;
    height: 45px;
    font-weight: medium;
    color: #4e4e4e;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const ResumeText = styled.div`
  padding: 10px 15px;

  a {
    text-decoration: none;
    font-family: Quicksand;
    font-weight: bold;
    font-size: 14px;
    color: #ed7839;
  }

  span {
    font-family: Quicksand;

    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0.02em;

    color: #5c5c5c;
  }
`;

export const Discussions = styled.div`
  margin-top: 45px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 3px;

  > h1 {
    padding: 10px 15px;
    background: #fdf1eb;
    height: 45px;
    font-weight: medium;
    color: #4e4e4e;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const DiscussionsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

export const DiscussionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #ed7839;
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;

    margin-top: 20px;
    width: 350px;
    justify-content: space-around;
  }
  h1:not(:first-child) {
    color: #595959;
    font-family: Quicksand;
    width: 626px;
    font-weight: 400;
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const TopicContent = styled.div`
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    font-family: Quicksand;
    font-weight: normal;
    font-size: 14px;
    color: #5c5c5c;
  }
`;

export const Subject = styled.div`
  margin-top: 30px;
  h1 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    color: #ed7839;
  }

  input {
    margin-top: 5px;
    background: #ffffff;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    padding: 10px 0 11px 23px;

    ::placeholder {
      font-family: Quicksand;
      font-weight: normal;
      font-size: 14px;
      color: #4d4d4d;
    }
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  h1 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    color: #ed7839;
  }

  input {
    margin-top: 5px;
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 3px;
    height: 113px;
    width: 100%;
    border-bottom: 0;

    ::placeholder {
      font-family: Quicksand;
      font-weight: normal;
      font-size: 14px;
      color: #4d4d4d;
    }
  }
`;

export const ContentInput = styled.div`
  div {
    display: flex;
    height: 32px;
    background: #eaf1f2;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 0px 0px 4px 4px;
  }

  button {
    background: linear-gradient(180deg, #feb154 0%, #f1833e 100%);
    border: 0;
    border-radius: 0px 0px 4px 0px;
    height: 31px;
    width: 205px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    border: 0;
    height: auto;

    img {
      margin-left: 15px;
      width: 15px;
      height: 15px;
    }
  }

  button {
    font-family: Quicksand;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
  }
`;

export const FeedbackMessage = styled.div`
  background: rgba(0, 0, 0, 0.3);
  margin-top: 30px;
`;

export const NewMessageContainer = styled.div`
  filter: blur(10px);
  margin-top: 30px;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 17px 24px;

  h1 {
    font-family: Quicksand;
    font-weight: bold;
    font-size: 16px;
    color: #ed7839;
  }

  span {
    font-family: Quicksand;
    font-weight: 500;
    font-size: 12px;
    color: #5c5c5c;
  }

  p {
    width: 980.7px;
    margin-top: 10px;
    font-family: Quicksand;
    font-weight: normal;
    font-size: 14px;
    color: #4d4d4d;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  z-index: 10;

  h1 {
    margin-top: 10px;
  }

  button {
    margin-top: 10px;
    font-family: Segoe UI;
    font-weight: normal;
    font-size: 14px;
    text-decoration-line: underline;

    background: none;
    border: 0;

    color: #ed7839;
  }
`;

export const Separator = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2px;
  background: #e7e7e7;
  color: #e7e7e7;

  span {
    margin-left: 10px;
    font-family: Quicksand;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }
`;

export const AddTopic = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 133px;
  height: 32px;
  border: 0;
  background: linear-gradient(180deg, #feb254 0%, #f0813d 100%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
`;

export const MessageContainer = styled.div`
  margin-top: 30px;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 17px 24px;

  h1 {
    font-family: Quicksand;
    font-weight: bold;
    font-size: 16px;
    color: #ed7839;
  }

  span {
    font-family: Quicksand;
    font-weight: 500;
    font-size: 12px;
    color: #5c5c5c;
  }

  p {
    width: 980.7px;
    margin-top: 10px;
    font-family: Quicksand;
    font-weight: normal;
    font-size: 14px;
    color: #4d4d4d;
  }
`;

export const MessageFooter = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;

  img:not(:first-child) {
    margin-left: 10px;
  }

  span {
    margin-left: 16px;
    font-family: Segoe UI;
    font-weight: 350;
    font-size: 14px;
    color: #757575;
  }
`;
