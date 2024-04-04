import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/bg_home.jpeg";
import Chatpanel from "../chatpanel";

export default function GalileodesignPage() {
  const aRef = useRef(null);

  useEffect(() => {
    const url = localStorage.getItem("url");
    if (!url) return;

    aRef.current.href = url;
    aRef.current.setAttribute("download", "document.pdf");

    aRef.current.click();
  }, []);

  return (
    <>
      <a ref={aRef} className="opacity-0"></a>
      <Helmet>
        <title>LegaLize</title>
        <meta name="description" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full bg-gray-50">
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
            <div className="flex flex-col items-center justify-start w-full p-5">
              <div className="flex flex-col items-end justify-start w-full pb-3 max-w-[960px]">
                <div className="flex flex-row justify-end w-full">
                  <div className="flex flex-row justify-center w-full p-4">
                    <div className="flex flex-row justify-end w-full pt-4">
                      <div className="flex flex-col items-start justify-start w-[99%] gap-[31px] p-6">
                        <div className="flex flex-row justify-start w-[99%] mt-[204px] ml-4">
                          <div
                            className="flex flex-col items-start justify-start w-full pt-[380px] gap-px"
                            style={{
                              width: "1300px",
                              height: "550px",
                              marginTop: "-200px",
                              backgroundImage: `url(${backgroundImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              paddingLeft: "20px",
                              paddingBottom: "20px",
                              borderRadius: "1.5%",
                            }}
                          >
                            <Heading
                              size="xl"
                              as="h1"
                              className="!text-white-A700 tracking-[-1.58px]"
                            >
                              Scan legal documents with ease
                            </Heading>
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-row justify-start w-full">
                                <Text as="p" className="!text-white-A700">
                                  Our AI-powered scanner makes it easy to scan
                                  and extract data from contracts, agreements,
                                  and other legal documents. Get started today.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center w-full p-2 bg-gray-50 rounded-[12px]">
                          <Link to="/chatbot">
                            <Button className="tracking-[0.24px] min-w-[155px] border-2 border-black">
                              Start scanning
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end w-full">
                  <div className="flex flex-col items-center justify-center w-full gap-10 p-4">
                    <div className="flex flex-row justify-start w-full mt-6">
                      <div
                        className="flex flex-col items-start justify-start w-[78%] pt-[5px] gap-2.5"
                        style={{ marginLeft: "60px" }}
                      >
                        <Heading
                          size="lg"
                          as="h2"
                          className="tracking-[-1.19px]"
                        >
                          Why scan with LegalEase?
                        </Heading>
                        <div className="flex flex-row justify-start w-full pb-0.5">
                          <div className="flex flex-row justify-start w-full">
                            <Text as="p" className="!text-gray-900">
                              LegalEase is an AI-powered scanner that makes it
                              easy to scan and extract data from contracts,
                              agreements, and other legal documents. Our scanner
                              is fast, accurate, and secure, so you can trust
                              the results.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full mb-6 gap-12">
                      <div className="flex flex-col items-center justify-start w-1/3 mb-[21px] gap-3">
                        <Link to="/document-form">
                          <div className="flex flex-row justify-center w-full h-auto">
                            <Img
                              src="images/img_depth_9_frame_0_125x223.png"
                              alt="image"
                              className="w-full h-full object-cover rounded-[12px] transition-transform duration-200 ease-in-out hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="flex flex-col items-center justify-start w-full pb-3">
                          <div className="flex flex-row justify-center w-full py-0.5">
                            <Link to="/document-form">
                              <Text
                                as="p"
                                className="!text-gray-900 !font-medium"
                              >
                                Streamlined Document Creation
                              </Text>
                            </Link>
                          </div>
                          <div className="flex flex-row justify-center w-full">
                            <Text
                              size="xs"
                              as="p"
                              className="!font-normal"
                              style={{ marginLeft: "25px", paddingTop: "10px" }}
                            >
                              Effortlessly create legally-binding documents
                              tailored to your needs with our intuitive form.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/3 gap-3">
                        <Link to="/chatbot">
                          <div className="flex flex-row justify-center w-full h-auto">
                            <Img
                              src="images/img_depth_9_frame_0.png"
                              alt="image"
                              className="w-full h-full object-cover rounded-[12px] transition-transform duration-200 ease-in-out hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="flex flex-col items-center justify-start w-full pb-3">
                          <div className="flex flex-row justify-center w-full">
                            <Link to="/chatbot">
                              <Text
                                as="p"
                                className="mt-0.5 !text-gray-900 !font-medium"
                              >
                                Extract data quickly
                              </Text>
                            </Link>
                          </div>
                          <div className="flex flex-row justify-center w-full">
                            <Text
                              size="xs"
                              as="p"
                              className="!font-normal"
                              style={{ marginLeft: "15px", paddingTop: "10px" }}
                            >
                              Our AI-powered scanner makes it quick and easy to
                              extract data from contracts, agreements, and other
                              legal documents.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full max-w-[960px]">
                <div className="flex flex-col items-center justify-center w-full gap-6 p-5">
                  <div className="flex flex-row justify-between w-full mt-5 px-[26px]">
                    <div className="flex flex-row justify-center w-[19%]">
                      <div className="flex flex-row justify-center w-full">
                        <a href="#" className="mx-[27px]">
                          <Text as="p" className="text-center">
                            Privacy Policy
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center">
                      <a href="#" className="mx-[17px]">
                        <Text as="p" className="text-center">
                          Terms of Service
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-row justify-center">
                      <a href="#" className="mx-12">
                        <Text as="p" className="text-center">
                          Support
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-row justify-center w-[19%]">
                      <div className="flex flex-row justify-center w-full">
                        <a href="#" className="mx-[38px]">
                          <Text as="p" className="text-center">
                            Contact Us
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_depth_5_frame_1.svg"
                    alt="image_one"
                    className="h-6"
                  />
                  <div className="flex flex-row justify-center w-full mb-5">
                    <div className="flex flex-row justify-end w-full">
                      <Text as="p" className="mr-[315px] text-center">
                        © 2024 LegalEase. All rights reserved.
                      </Text>
                    </div>
                  </div>
                  <Chatpanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
