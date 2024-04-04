import React, { useState } from "react";
import {
  Text,
  Img,
  Button,
  Heading,
  Input,
  SelectBox,
  TextArea,
} from "../components";
import { useNavigate, Link } from "react-router-dom";

export default function DocumentForm1() {
  const [dueDate, setDueDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const dropDownOptions = [
    { label: "general", value: "general" },
    { label: "Limited", value: "Limited" },
    { label: "Specific", value: "Specific" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    let jsonObject = JSON.parse(localStorage.getItem("legal-data"));
    const formData = new FormData(e.target);
    formData.forEach(function (value, key) {
      jsonObject[key] = value;
    });

    localStorage.setItem("legal-data", JSON.stringify(jsonObject));
    navigate("/document-form-4");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-start w-full p-5"
    >
      <div className="flex flex-col items-center justify-start w-[42%] py-5">
        <header className="flex flex-row justify-center items-center w-full pt-3 pb-[11px] px-3 border-gray-200 border-b border-solid">
          <div className="flex flex-row justify-center w-[10%] ml-[27px]">
            <div className="flex flex-row justify-start items-center w-full gap-4">
              <Img
                src="https://img.icons8.com/ios-filled/50/law.png"
                alt="image"
                className="h-8 w-8"
              />
              <div className="flex flex-row justify-start w-[74%]">
                <div className="flex flex-row justify-start w-full pt-5.5">
                  <Link to="/">
                    <Heading
                      size="s"
                      as="h6"
                      className="tracking-[-0.27px]"
                      style={{ fontSize: "28px" }}
                    >
                      LegalEase
                    </Heading>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-3 p-4"></div>
        <div className="flex flex-row justify-center w-full p-3">
          <div className="flex flex-row justify-start w-full mt-3 pt-0.5 mx-1 max-w-[480px]">
            <Heading size="md" as="h1" className="tracking-[-0.80px]">
              Power of Attorney
            </Heading>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]"></div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              Scope of power granted
            </Text>
          </div>
          <SelectBox
            name="scope-of-power"
            indicator={
              <Img
                src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                alt="Vector - 0"
                className="w-[20px] h-[20px]"
              />
            }
            placeholder="Select Power"
            options={dropDownOptions}
            className="w-full gap-px border-blue_gray-100 border border-solid"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              Start Date
            </Text>
          </div>
          <div className="flex items-center w-full">
            <input
              type="date"
              name="start-date"
              placeholder="Select Start date"
              value={dueDate}
              onChange={handleDueDateChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              End Date
            </Text>
          </div>
          <div className="flex items-center w-full">
            <input
              type="date"
              name="end-date"
              placeholder="Select end date"
              value={endDate}
              onChange={handleEndDateChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Restrictions or limitations
            </Text>
          </div>
          <Input
            type="text"
            name="restrictions"
            placeholder="Enter Restrictions"
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center w-full p-2 bg-gray-50 rounded-[12px]">
          <Button
            type="submit"
            className="tracking-[0.24px] min-w-[155px] border-2 border-black"
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
