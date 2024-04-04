import React, { useEffect, useRef, useState } from "react";
import { Heading, Text, Img, Input, Button } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
import Chatpanel from "./chatpanel";

export default function ChatBot() {
  const inputRef = useRef(null);
  const chatRef = useRef(null);
  const [fileName, setFileName] = useState("Upload Document");
  const [link, setLink] = useState("#");
  const [history, setHistory] = useState([]);

  const uploadDocument = async () => {
    inputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFileName(inputRef.current?.files[0]?.name);

    const formData = new FormData();
    formData.append("file", inputRef.current?.files[0]);

    axios
      .post("http://localhost:5000/summarize", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type header
        },
        responseType: "blob",
      })
      .then((res) => {
        const file = new Blob([res.data]);
        const fileURL = URL.createObjectURL(file);
        setLink(fileURL);
      });

    setFileName(inputRef.current?.files[0].name);
  };

  const sendResponse = () => {
    const prompt = chatRef.current?.value;

    axios
      .post("http://localhost:5000/chat", { prompt: prompt })
      .then((res) => setHistory([...history, prompt, res.data]));
  };

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchingResponse, setFetchingResponse] = useState(false);
  const textareaRef = useRef(null);

  const handleTextareaInput = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    setUserInput(textareaRef.current.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") {
      return;
    }

    try {
      setFetchingResponse(true);
      const { data } = await axios.post("http://127.0.0.1:5000/get_response", {
        input: userInput,
      });
      console.log(data);

      // Prepend the response message to the messages array
      setMessages([
        { text: data[0], sender: "chatbot" },
        ...messages, // Spread the existing messages after the new response
        { text: userInput, sender: "user" },
      ]);
      setUserInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setFetchingResponse(false); // Set fetchingResponse to false after the API call completes
    }
  };

  return (
    <div className="flex flex-row justify-center w-full p-5">
      <div className="flex flex-col items-start justify-center w-full pb-60 mx-[140px] max-w-[960px]">
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
        <div className="flex flex-row justify-start p-2.5">
          <Heading
            size="md"
            as="h1"
            className="mt-2.5 ml-[5px] tracking-[-0.80px]"
          >
            Analyzing a legal document
          </Heading>
        </div>
        <div className="flex flex-row justify-center w-full p-1">
          <div className="flex flex-row justify-start w-[98%] mb-1.5 mx-3">
            <Text size="s" as="p">
              You can upload a legal document for analysis. First, our AI will
              generate a summary of the document. Then, you can ask follow-up
              questions about the document&#39;s content or implications.
            </Text>
          </div>
        </div>
        <form className="flex" onSubmit={handleSubmit}>
          <Button
            type="button"
            onClick={uploadDocument}
            leftIcon={
              <Img
                src="https://img.icons8.com/metro/26/000000/file.png"
                alt="Vector - 0"
              />
            }
            className="mt-3 ml-4 gap-2 tracking-[0.21px] font-bold min-w-[184px] border-2 border-black-1400"
          >
            {fileName}
          </Button>
          <Button className="mt-3 ml-4 gap-2 tracking-[0.21px] font-bold min-w-[184px] border-2 border-black-1400">
            Generate Summary
          </Button>
        </form>
        <input className="hidden" ref={inputRef} type="file" />
        <div className="flex flex-row justify-start w-full mt-3 p-[7px]">
          <div className="flex flex-row justify-start w-[19%] mt-2 ml-2">
            <div className="flex flex-row justify-start w-full pt-0.5">
              <Heading as="h2" className="tracking-[-0.27px]">
                Document Summary
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full p-1">
          <div className="flex flex-row justify-start w-[98%] mb-1.5 mx-3">
            <Text size="s" as="p">
              Our AI has generated a summary of your document. You can ask
              follow-up questions about the document&#39;s content or
              implications.
            </Text>
          </div>
        </div>
        <a target="_blank" href={link} className="!font-medium w-full">
          <div className="flex flex-row justify-between items-center w-full p-[11px] bg-gray-50">
            <div className="flex flex-row justify-start items-center w-[61%] ml-1 gap-4">
              <Button size="sm" className=" rounded-lg">
                <Img src="https://img.icons8.com/metro/26/000000/file.png" />
              </Button>
              <div className="flex flex-col items-start justify-start w-[33%] gap-px">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    Summarized Document
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="https://img.icons8.com/ios-filled/50/forward--v1.png"
              alt="arrowright_one"
              className="h-7 w-7 mr-1"
              style={{ marginRight: "20px" }}
            />
          </div>
        </a>
        <div className="flex flex-col gap-4 bg-gray-50 w-full h-full">
          {history.map((i, j) => {
            const common = "";
            const userChat = common + "ml-5 inline-flex self-end";
            const aiChat = common + "mr-5 inline-flex self-start";

            return (
              <div key={j} className={j % 2 == 0 ? userChat : aiChat}>
                <Text>{i}</Text>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-center w-full p-3">
          <div className="flex flex-row justify-start items-center w-full gap-4 p-2 mx-1 bg-blue_gray-50 rounded-[12px]">
            <div className="flex flex-row justify-between items-center w-full p-3 bg-gray-100 rounded-lg">
              <div className="flex flex-row justify-start border border-gray-300 w-4/5 mr-3">
                <textarea
                  ref={textareaRef}
                  onInput={handleTextareaInput}
                  name="question"
                  placeholder="Ask a question"
                  className="w-full p-2 outline-none rounded-lg resize-none text-blue-gray-500"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>

              <div className="flex flex-row items-center justify-end w-1/5 gap-4">
                {/* Conditional rendering for the send button or waiting indicator */}
                {fetchingResponse ? (
                  <div
                    className="loader"
                    style={{
                      color: "black",
                      width: "50px",
                      height: "50px",
                      border: "5px solid #f3f3f3",
                      borderTop: "5px solid #3498db",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                ) : (
                  <Button
                    onClick={sendMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
                  >
                    Send
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Chatpanel />
      </div>
    </div>
  );
}
