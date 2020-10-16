import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import { FirebaseContext } from "../context/firebase";

import { Header, Button, SearchBox } from "../components";
import * as ROUTES from "../constants/routes";
import LoginModal from "./loginModal";

export default function HeaderContainer() {
  const router = useRouter();
  const { firebase, user } = useContext(FirebaseContext);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    const modal = document.getElementById("modal");
    setTimeout(() => {
      modal.classList.toggle("active");
    }, 1);
    setModalVisible(!modalVisible);
  };

  const createRental = () => router.push(ROUTES.CREATE);

  const handleLogout = (e) => {
    e.preventDefault();

    setDropdownVisible(false);
    firebase
      .auth()
      .signOut()
      .then(() => router.push(ROUTES.HOME))
  };

  return (
    <Header>
      <LoginModal display={modalVisible} toggleModal={toggleModal} />

      <Header.Frame>
        <Header.Logo to="/" src="/images/logo.png" alt="Pet House" />
        <SearchBox>
          <SearchBox.Input placeholder="ค้นหา" />
          <SearchBox.Button>
            <i className="fas fa-search" />
          </SearchBox.Button>
        </SearchBox>
      </Header.Frame>

      <Header.Frame direction="row-reverse">
        {user ? (
          <Header.Profile
            src="/images/user.png"
            alt="User"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          />
        ) : (
          <>
            <Header.Icon src="/icons/customer.png" alt="Guest" />
          </>
        )}
        <Button onClick={user ? createRental : toggleModal} id="login-btn">
          {user ? "เปิดเช่า" : "Login"}
        </Button>
        <ul
          style={{
            display: dropdownVisible ? "block" : "none",
            listStyle: "none",
            position: "absolute",
            right: "33px",
            top: "50px",
            border: "solid #3f3f3f75 1px",
            borderRadius: "10px",
          }}
        >
          <li style={{ backgroundColor: "#ffffff75", padding: "7.5px" }}>
            {user && (
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "#2f2f2f75",
                }}
              >
                {/* {JSON.parse(localStorage.getItem("authUser")).displayName} */}
                {user.displayName}
              </p>
            )}
          </li>
          <li style={{ backgroundColor: "#ffffff75", padding: "7.5px" }}>
            <a
              href=""
              onClick={handleLogout}
              style={{
                textDecoration: "none",
                color: "#000000aa",
                fontSize: "16px",
              }}
            >
              Log Out
            </a>
          </li>
        </ul>
      </Header.Frame>
    </Header>
  );
}
