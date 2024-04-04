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
import axios from "axios";
import { Link } from "react-router-dom";

export default function DocumentForm1() {
  const [link, setLink] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let jsonObject = JSON.parse(localStorage.getItem("legal-data")) || {};
    const formData = new FormData(e.target);
    formData.forEach(function (value, key) {
      jsonObject[key] = value;
    });
    localStorage.removeItem("legal-data");

    axios
      .post(
        "http://localhost:5000/generate-document",
        {
          data: jsonObject,
        },
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        const file = new Blob([res.data]);
        const fileURL = URL.createObjectURL(file);
        setLink(fileURL);
      });
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
              Wills
            </Heading>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]"></div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Distribution of assets
            </Text>
          </div>
          <Input
            type="text"
            name="assets"
            placeholder="Enter Assests"
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Executor information
            </Text>
          </div>
          <Input
            type="text"
            name="executor"
            placeholder="Enter Executor info"
            className="w-full"
          />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                  Guardianship arrangements
                </Text>
              </div>
              <TextArea
                name="termination-condition"
                placeholder="Enter termination condition"
                className="w-full text-blue_gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full p-2 bg-gray-50 rounded-[12px]">
          {link.length == 0 ? (
            <Button
              type="submit"
              className="tracking-[0.24px] min-w-[155px] border-2 border-black"
            >
              Submit
            </Button>
          ) : (
            <a target="_blank" href={link}>
              Download Document
            </a>
          )}
        </div>
      </div>
    </form>
  );
}
