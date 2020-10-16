import React, { useState } from "react";
import { Filter } from "../components";

export default function FilterContainer() {
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [species, setSpecies] = useState("");
  return (
    <div>
      <Filter>
        <Filter.Frame>
          <Filter.Label>พื้นที่</Filter.Label>
          <Filter.Select
            value={area}
            onChange={({ target }) => setArea(target.value)}
          >
            <Filter.Option value="" disabled hidden>
              พื้นที่
            </Filter.Option>
            <Filter.Option value="สุเทพ">สุเทพ</Filter.Option>
            <Filter.Option value="ช้างเผือก">ช้างเผือก</Filter.Option>
            <Filter.Option value="สันติธรรม">สันติธรรม</Filter.Option>
          </Filter.Select>
        </Filter.Frame>

        <Filter.Frame>
          <Filter.Label>ชนิด</Filter.Label>
          <Filter.Select
            value={type}
            onChange={({ target }) => setType(target.value)}
          >
            <Filter.Option value="" disabled hidden>
              ชนิด
            </Filter.Option>
            <Filter.Option value="สุเทพ">สุนัข</Filter.Option>
            <Filter.Option value="ช้างเผือก">แมว</Filter.Option>
            <Filter.Option value="สันติธรรม">กระต่าย</Filter.Option>
          </Filter.Select>

          <Filter.Select
            value={species}
            onChange={({ target }) => setSpecies(target.value)}
          >
            <Filter.Option value="" disabled hidden>
              สายพันธุ์
            </Filter.Option>
            <Filter.Option value="สุเทพ">สุเทพ</Filter.Option>
            <Filter.Option value="ช้างเผือก">ช้างเผือก</Filter.Option>
            <Filter.Option value="สันติธรรม">สันติธรรม</Filter.Option>
          </Filter.Select>
        </Filter.Frame>

        <Filter.Frame>
          <Filter.Label>ราคา/วัน</Filter.Label>
          <Filter.Input placeholder="ราคาเริ่มต้น" />
          <Filter.Input placeholder="ราคาสูงสุด" />
        </Filter.Frame>

        <Filter.Frame>
          <Filter.Label>ช่วงราคามัดจำ</Filter.Label>
          <Filter.Input placeholder="ราคาเริ่มต้น" />
          <Filter.Input placeholder="ราคาสูงสุด" />
        </Filter.Frame>
      </Filter>
    </div>
  );
}
