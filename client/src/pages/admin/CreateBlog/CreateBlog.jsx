"use client";

import { useEffect, useState } from "react";
import Editor from "./MDXEditor";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ImageIcon } from "lucide-react";

export default function CreateBlog() {
  const [selectedBlogTypes, setSelectedBlogTypes] = useState([]);
  const [fileAdded, setFileAdded] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [fileAddedName, setFileAddedName] = useState(null);
  const [mdxValue, setMdxValue] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const createBlog = useMutation({
    mutationFn: (newBlog) => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/blog`,
        newBlog
      );
    },
  });

  const handleTypeChange = (event) => {
    const typeToToggle = event.target.value;
    setSelectedBlogTypes((prev) =>
      prev.includes(typeToToggle)
        ? prev.filter((type) => type !== typeToToggle)
        : [...prev, typeToToggle]
    );
  };

  const handleTypeDelete = (typeToRemove) => {
    setSelectedBlogTypes((prev) =>
      prev.filter((type) => type !== typeToRemove)
    );
  };

  const handleFile = (fileArray) => {
    const file = fileArray[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFileAdded(reader.result);
    };
    setFileAddedName(file.name);
  };

  useEffect(() => {
    if (createBlog.isSuccess) {
      setShowSuccessModal(true);
      setSelectedBlogTypes([]);
      setFileAdded("");
      setBlogTitle("");
      setFileAddedName(null);
      setMdxValue("Enter blog content");
    }
    if (createBlog.isError) {
      setShowErrorModal(true);
    }
  }, [createBlog.isSuccess, createBlog.isError]);

  return (
    <div className="relative w-full max-h-screen overflow-y-auto bg-text-dev-light-orange">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {showSuccessModal && (
          <Modal onClose={() => setShowSuccessModal(false)}>
            Blog successfully saved.
          </Modal>
        )}

        {showErrorModal && (
          <Modal onClose={() => setShowErrorModal(false)}>
            Blog Not saved. Please Try Again.
          </Modal>
        )}

        <h2 className="text-4xl font-bold text-text-dev-orange">
          Blog Management
        </h2>

        <div className="space-y-6">
          <InputField
            label="Blog Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            placeholder="Blog Title"
          />

          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="blog-cover-image"
            >
              Blog Cover Image
            </label>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="file-input"
                className="cursor-pointer bg-[#E2DEDC] py-2 px-4 rounded-md text-sm font-bold text-[#292422] hover:bg-[#D4CECB] transition duration-300"
              >
                Browse
              </label>
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={(e) => handleFile(e.target.files)}
                accept="image/*"
              />
              <span className="text-sm text-[#9F918B] font-bold">
                {fileAddedName || "Choose image"}
              </span>
            </div>
            {fileAdded ? (
              <div className="mt-4 rounded-lg">
                <img
                  src={fileAdded}
                  alt="Preview"
                  className=" rounded-md shadow-md h-44 object-cover aspect-video "
                />
              </div>
            ) : (
              <div className="mt-4 rounded-lg  shadow-md h-44 w-[19.6rem] bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon
                      className="mx-auto h-12 w-12 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      No image selected
                    </p>
                  </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Blog Type</label>
            <div className="flex flex-wrap gap-2 p-4 border-[1.5px] border-[#292422] w-fit md:min-w-[28rem] rounded-md bg-white">
              {["articles", "news", "tech", "jobs"].map((type) => (
                <div
                  key={type}
                  className="flex items-center select-none mx-auto space-x-2"
                >
                  <label
                    className={`flex items-center cursor-pointer space-x-1 px-3 py-1 rounded-full text-sm ${
                      selectedBlogTypes.includes(type)
                        ? "bg-text-dev-orange text-white"
                        : "bg-[#D4CECB] text-[#9F918B]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox hidden h-4 w-4 text-text-dev-orange rounded-full"
                      value={type}
                      checked={selectedBlogTypes.includes(type)}
                      onChange={handleTypeChange}
                    />
                    <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                  </label>
                  <button
                    onClick={() => handleTypeDelete(type)}
                    className={`text-[#9F918B] hover:text-text-dev-orange ${
                      selectedBlogTypes.includes(type) ? "visible" : "invisible"
                    }`}
                  >
                    <img src="/admin/delete.svg" alt="delete" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              Blog Description
            </label>
            <div className="border-[1.5px] border-[#292422] rounded-md overflow-hidden">
              <Editor mdxValue={mdxValue} setMdxValue={setMdxValue} />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() =>
                createBlog.mutate({
                  title: blogTitle,
                  coverImage: fileAdded,
                  imageName: fileAddedName,
                  blogType: selectedBlogTypes,
                  blogContent: mdxValue,
                })
              }
              className="px-4 py-2 bg-text-dev-orange text-white rounded-md hover:bg-[#E64A19] transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input
        className="w-full max-w-[36rem] h-10 px-4 border-[1.5px] border-[#292422] rounded-md bg-white placeholder-[#9F918B] focus:outline-none focus:ring-2 focus:ring-text-dev-orange"
        {...props}
      />
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <p className="text-lg mb-4">{children}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-text-dev-orange text-white rounded-md hover:bg-[#E64A19] transition duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
}
