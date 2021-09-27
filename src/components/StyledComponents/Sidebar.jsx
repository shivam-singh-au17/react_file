import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #440908;
`;
const Drawer = styled.div`
  max-height: 60vh;
  max-width: 40vh;
  overflow-y: scroll;
  border: 1px solid rgb(160, 160, 160);
  background-color: #fff;
`;
const DrawerItem = styled.div`
  label {
    font-size: 25px;
    font-weight: 600;
    position: relative;
    top: 3px;
    letter-spacing: 1px;
  }
  img {
    width: 10%;
    margin: 0px 25px;
  }
  hr {
    padding: 0px;
    margin-bottom: 10px;
  }
`;

export default function Sidebar() {
  return (
    <Container>
      <Drawer>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684828.png"
            alt="Inbox"
          />
          <label htmlFor="">Inbox</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684831.png"
            alt="Inbox"
          />
          <label htmlFor="">Send Email</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684812.png"
            alt="Inbox"
          />
          <label htmlFor="">Drafts</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684806.png"
            alt="Inbox"
          />
          <label htmlFor="">All MAIL</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684820.png"
            alt="Inbox"
          />
          <label htmlFor="">Trash</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684819.png"
            alt="Inbox"
          />
          <label htmlFor="">Contact</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684821.png"
            alt="Inbox"
          />
          <label htmlFor="">Home</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684833.png"
            alt="Inbox"
          />
          <label htmlFor="">About</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684828.png"
            alt="Inbox"
          />
          <label htmlFor="">Inbox</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684831.png"
            alt="Inbox"
          />
          <label htmlFor="">Send Email</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684812.png"
            alt="Inbox"
          />
          <label htmlFor="">Drafts</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684806.png"
            alt="Inbox"
          />
          <label htmlFor="">All MAIL</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684820.png"
            alt="Inbox"
          />
          <label htmlFor="">Trash</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684819.png"
            alt="Inbox"
          />
          <label htmlFor="">Contact</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684821.png"
            alt="Inbox"
          />
          <label htmlFor="">Home</label>
          <hr />
        </DrawerItem>
        <DrawerItem>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684833.png"
            alt="Inbox"
          />
          <label htmlFor="">About</label>
          <hr />
        </DrawerItem>
      </Drawer>
    </Container>
  );
}
