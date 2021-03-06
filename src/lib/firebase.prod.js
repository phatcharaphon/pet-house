import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

function seedDatabase(firebase) {
  const profileList = [
    {
      id: 1,
      title: "golden น่ารักนิสัยดี",
      location: "ฟาร์มแสนรู้ เชียงใหม่ อ.เมืองเชียงใหม่",
      price_rate: 300,
      rating: 4,
      type: "สุนัข",
      name: "ทองเหลือง",
      deposit: 2000,
      img: 1,
      species: "Golden Retriever",
      color: "เหลืองอ่อน",
      farm_name: "ฟาร์มแสนรู้",
      farm_owner: "Pawaris Sueaaim",
      call: "099-9999999",
    },
    {
      id: 2,
      title: "เปอร์เซีย (พันธุ้แท้)",
      location: "ร้านเหมียวๆ กรุงเทพ เขตสาทร",
      price_rate: 150,
      rating: 3,
      type: "แมว",
      name: "วีล่า",
      deposit: 3000,
      img: 3,
      species: "Persian",
      color: "เทา",
      farm_name: "ร้านเหมียวๆ",
      farm_owner: "Phatcharaphon Phromjom",
      call: "011-1111111",
    },
    {
      id: 3,
      title: "กระต่ายตัวผู้ขาวดำ",
      location: "บ้านสัตว์ สุโขทัย อ.ศรีสัชนาลัย",
      price_rate: 50,
      rating: 4,
      type: "กระต่าย",
      name: "มิค",
      deposit: 2500,
      img: 4,
      species: "",
      color: "ขาว-ดำ",
      farm_name: "บ้านสัตว์",
      farm_owner: "Phantakan D Tunvichai",
      call: "088-8888888",
    },
    {
      id: 4,
      title: "ชูก้าไรเดอร์",
      location: "PetPet เชียงใหม่ อ.เมืองเชียงใหม่",
      price_rate: 50,
      rating: 5,
      type: "ชูการ์ไรเดอร์",
      name: "น้ำตาล",
      deposit: 1800,
      img: 2,
      species: "",
      color: "ดำ-ครีม",
      farm_name: "Petpet Rider",
      farm_owner: "Lorem Ipsum",
      call: "Unknown",
    },
  ];

  profileList.map((profile) =>
    firebase.firestore().collection("profiles").add(profile)
  );
}
// seeding database --> uncomment to seeding some content to database
// seedDatabase(firebase);

export default firebase;
