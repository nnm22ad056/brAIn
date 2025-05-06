"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import Navbar from '@/components/ui/navbar';


export default function Scan() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <>
    <Navbar />
    <div className="max-w-2xl mx-auto mt-50 bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e] border-dashed border-t border-b border-white/20 border-b-white/5 rounded-xl">
      <FileUpload onChange={handleFileUpload} />
    </div>

    </>
  );
}
