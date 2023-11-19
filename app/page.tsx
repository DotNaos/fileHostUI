"use client";
import {
  Button,
  Checkbox,
  Chip,
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
} from "@nextui-org/react";


import Image from "next/image";
import { useState } from "react";
import { FaDochub, FaEllipsis, FaHandDots, FaPlus, FaThreads } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { BiErrorAlt } from "react-icons/bi";
export default function Home() {

  const initialFiles = ["Photo.png", "Money.pdf", "main.py", "data.zip"];
  const fileTypes = [
    "jpg",
    "jpeg",
    "gif",
    "png",
    "pdf",
    "css",
    "txt",
    "avi",
    "mpeg",
    "mpg",
    "mp3",
    "doc",
    "docx",
    "odt",
    "apk",
    "mvb",
    "zip",
    "rar",
    "mkv",
    "xls",
    "odf",
    "py",
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [files, setFiles] = useState(initialFiles);

  const handleOpen = () => {
      onOpen();
  };

  const handleClose = (filesToRemove : String) => {
    setFiles(files.filter((file) => file !== filesToRemove));
    if (files.length === 1) {
      // setFiles(initialFiles);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen px-[20vw] pt-[10vh] pb-[2vh] gap-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[8vw] font-bold uppercase">Anonfiles</p>
        <p className="text-[3vw] ">anonymous file upload</p>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          header: "hidden",
          closeButton: "hidden",
          base: "bg-default-50 bg-opacity-70 backdrop-filter backdrop-blur-sm border-2 border-red-500 rounded-xl",
        }}
      >
        <ModalContent>
          <ModalBody className="flex flex-col items-center justify-center">
            <BiErrorAlt className="text-[15vw] text-red-500" />
            <span className="text-[3vw] font-bold">Filetype not supported</span>
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <span className="text-[1.5vw] font-bold text-default-500">Supported:</span>
            <Divider />

            <div className="flex flex-wrap justify-start gap-2">
              {fileTypes.map((fileType, index) => (
                <Chip key={index} variant="faded" color="success">
                  <span className="font-bold">{fileType}</span>
                </Chip>
              ))}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-4 justify-center items-center w-full sm:w-[30vw] h-[20vw] bg-default-50  rounded-xl border-dashed border-default-200 border-2">
          <IoShareOutline className="text-[8vw] text-default-200" />
          <p className="font-bold text-medium">Drop files to upload</p>
          <Button
            className="rounded-full bg-white text-default font-bold"
            onClick={handleOpen}
          >
            Choose files
          </Button>
        </div>

        <div className="flex">
          <Checkbox />
          <p className="text-default-700">
            I agree to the{" "}
            <span className="text-primary-500">Terms of Service</span>
          </p>
        </div>

        <div className="flex gap-2 w-[30vw] flex-wrap">
          <Chip variant="faded">none</Chip>
          {files.map((file, index) => (
            <Chip key={index} onClose={() => handleClose(file)} variant="faded">
              {file}
            </Chip>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Footer({ ...props }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-default-300">
        Upload your files anonymously and free on AnonFiles. We offer you 500 MB
        filesize limit and unlimited bandwidth. AnonFiles.com is your number one
        Anonymous File Upload site.
      </p>
      <div className="flex gap-4 items-center justify-center">
        <span>HOME</span>
        <span>TERMS</span>
        <span>ABOUT</span>
        <span>API</span>
      </div>
    </div>
  );
}
