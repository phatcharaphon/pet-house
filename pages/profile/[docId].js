import { useRouter } from "next/router";
import { useState, useContext } from "react";

import { FirebaseContext } from "../../src/context/firebase";

import { PageContent, Form, Button, Modal, Card } from "../../src/components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default function Profile() {
  const router = useRouter();
  const { docId } = router.query;
  const { user, profiles } = useContext(FirebaseContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const profile = profiles.find((item) => item.docId === docId);
  console.log(profile, docId, profiles);

  const toggleModal = () => {
    if (!user) {
      document.getElementById("login-btn").click();
    } else {
      if (modalIndex !== 4) {
        setModalVisible(!modalVisible);
        const modal = document.getElementById("rental-modal");
        setTimeout(() => {
          modal.classList.toggle("active");
        }, 1);
        setModalIndex(1);
      } else {
        router.push("/history");
      }
    }
  };

  const handleProceed = () => {
    if (modalIndex === 3) {
    }
    setModalIndex(modalIndex + 1);
  };

  return (
    <>
      <head>
        <title>{profile.title}</title>
      </head>
      <PageContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "1100px",
            borderRadius: "20px 20px 0 0",
            overflow: "hidden",
          }}
        >
          <img
            src={`/images/${profile.img}.jpg`}
            style={{ maxHeight: "450px" }}
          />

          <div
            style={{ marginTop: "30px", borderBottom: "solid #3f3f3f50 2px" }}
          >
            <p style={{ color: "#36882b", marginBottom: "10px" }}>
              รายละเอียดสัตว์เลี้ยง
            </p>
          </div>

          <div
            style={{
              marginTop: "10px",
              borderBottom: "solid #3f3f3f50 2px",
              paddingBottom: "10px",
              color: "#3f3f3f95",
              fontWeight: "normal",
            }}
          >
            <p>สายพันธุ์ : {profile.species ? profile.species : "ไม่ระบุ"}</p>
            <p>
              สี : {profile.color} ชื่อ : {profile.name}
            </p>
            <p>
              ราคาเช่า : {profile.price_rate} บาท/วัน ค่ามัดจำ :{" "}
              {profile.deposit} บาท
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginLeft: "30px",
          }}
        >
          <div
            style={{
              padding: "0 20px",
              borderRadius: "15px",
              border: "solid #3f3f3f90 2px",
              color: "#36882b",
            }}
          >
            <Form.Row>
              <Form.Icon src="/icons/small-business.png" />
              <Form.Text color="#36882b">{profile.farm_name}</Form.Text>
            </Form.Row>

            <Form.Row>
              <Form.Icon src="/icons/place-marker.png" />
              <Form.Text color="#36882b">{profile.location}</Form.Text>
            </Form.Row>

            <Form.Row>
              <Form.Icon src="/icons/fb.png" />
              <Form.Text color="#36882b">{profile.farm_owner}</Form.Text>
            </Form.Row>

            <Form.Row>
              <Form.Icon src="/icons/call.png" />
              <Form.Text color="#36882b">{profile.call}</Form.Text>
            </Form.Row>
          </div>

          <Button
            style={{ marginTop: "30px", lineHeight: "25px" }}
            onClick={toggleModal}
          >
            จอง
          </Button>
        </div>
      </PageContent>

      <Modal display={modalVisible ? "block" : "none"}>
        <Modal.Base id="rental-modal" translateY="-150px">
          <Modal.Close onClick={toggleModal}>&times;</Modal.Close>

          {modalIndex === 1 && (
            <>
              <div style={{ display: "flex", marginBottom: "50px" }}>
                <Card style={{ cursor: "default" }}>
                  <Card.Image src={profile.img} style={{ height: "auto" }} />
                  <Card.Title>{profile.title}</Card.Title>
                  <Card.Location>{profile.location}</Card.Location>
                  <Card.PriceRate>{profile.price_rate} บาท/วัน</Card.PriceRate>
                </Card>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div>
                    <Form.Text>Start Date</Form.Text>
                    <DayPickerInput
                      placeholder="DD/MM/YYYY"
                      format="DD/MM/YYYY"
                      onDayChange={(date) =>
                        setStartDate(
                          `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
                        )
                      }
                      style={{
                        border: "#3f3f3fa0 solid 1.5px",
                        borderRadius: "50vh",
                        padding: "0 15px",
                      }}
                    />
                  </div>
                  <div>
                    <Form.Text>End Date</Form.Text>
                    <DayPickerInput
                      placeholder="DD/MM/YYYY"
                      format="DD/MM/YYYY"
                      onDayChange={(date) =>
                        setEndDate(
                          `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
                        )
                      }
                      style={{
                        border: "#3f3f3fa0 solid 1.5px",
                        borderRadius: "50vh",
                        padding: "0 15px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <Form.Text>
                  Rental between {startDate} ---- {endDate}
                </Form.Text>
              </div>
            </>
          )}

          {modalIndex === 2 && (
            <div style={{ textAlign: "center", padding: "100px 0" }}>
              <h1>Payment</h1>
            </div>
          )}

          {modalIndex === 3 && (
            <div style={{ textAlign: "center", padding: "100px 0" }}>
              <h1>Agreement</h1>
            </div>
          )}

          {modalIndex === 4 && (
            <div style={{ textAlign: "center", padding: "100px 0" }}>
              <Form.Icon size={75} src="/icons/checkmark.png" />
            </div>
          )}

          {modalIndex !== 4 && (
            <div style={{ textAlign: "center" }}>
              <Button onClick={handleProceed}>ดำเนินการต่อ</Button>
            </div>
          )}
        </Modal.Base>
      </Modal>
    </>
  );
}
