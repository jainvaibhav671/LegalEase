// import React from 'react';
import React, { useState } from 'react';
import { Text, Img, Button, Heading, Input, SelectBox, TextArea } from "../components";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

export default function DocumentForm1() {
  const [dueDate, setDueDate] = useState(null);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let jsonObject = JSON.parse(localStorage.getItem("legal-data"));
    const formData = new FormData(e.target);
    formData.forEach(function (value, key) {
      jsonObject[key] = value;
    });

    localStorage.setItem("legal-data", JSON.stringify(jsonObject));
    navigate("/document-form-3");
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
              Contracts
            </Heading>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]"></div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Subject matter of the contract
            </Text>
          </div>
          <Input
            type="text"
            name="subject"
            placeholder="Enter subject"
            className="w-full"
          />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                  Terms and conditions
                </Text>
              </div>
              <TextArea
                name="terms-and-conditions"
                placeholder="Enter Terms"
                className="w-full text-blue_gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Compensation details
            </Text>
          </div>
          <Input
            type="text"
            name="compensation-details"
            placeholder="Enter Compensation"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Termination clauses
            </Text>
          </div>
          <Input
            type="text"
            name="termination-clauses"
            placeholder="Enter Termination"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Dispute resolution mechanisms
            </Text>
          </div>
          <Input
            type="text"
            name="dispute-resolution-mechanisms"
            placeholder="Enter Dispute resolution"
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
