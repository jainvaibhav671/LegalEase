import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Galileodesign from "pages/Galileodesign";
import DocumentForm from "pages/DocumentForm";
import DocumentForm1 from "pages/Documentform1";
import DocumentForm2 from "pages/Documentform2";
import DocumentForm3 from "pages/Documentform3";
import DocumentForm4 from "pages/Documentform4";
import ChatBot from "pages/ChatBot";
import Form from "pages/Form";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Galileodesign /> },
    { path: "/form", element: <Form /> },
    { path: "/document-form", element: <DocumentForm /> },
    { path: "/document-form-2", element: <DocumentForm1 /> },
    { path: "/document-form-3", element: <DocumentForm2 /> },
    { path: "/document-form-4", element: <DocumentForm3 /> },
    { path: "/document-form-5", element: <DocumentForm4 /> },
    { path: "/chatbot", element: <ChatBot /> },
    { path: "*", element: <NotFound /> },
    {
      path: "galileodesign",
      element: <></>,
    },
  ]);

  return element;
};

export default ProjectRoutes;
