"use client";

import { useState } from "react";

export default function ImageCompressor() {

  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(80);
  const [results, setResults] = useState<any[]>([]);


  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }

  };



  const convertImages = () => {

    setResults([]);


    files.forEach((file) => {


      const reader = new FileReader();


      reader.onload = (e) => {


        const img = new Image();


        img.onload = () => {


          const canvas =
            document.createElement("canvas");


          const ctx =
            canvas.getContext("2d");


          if (!ctx) return;



          const maxWidth = 1600;


          const scale = Math.min(
            1,
            maxWidth / img.width
          );


          canvas.width =
            img.width * scale;


          canvas.height =
            img.height * scale;



          ctx.drawImage(
            img,
            0,
            0,
            canvas.width,
            canvas.height
          );



          canvas.toBlob(
            (blob) => {


              if (!blob) return;


              const url =
                URL.createObjectURL(blob);



              setResults((prev)=>[
                ...prev,
                {
                  name:file.name,
                  original:
                    (file.size / 1024).toFixed(2),

                  compressed:
                    (blob.size / 1024).toFixed(2),

                  url
                }
              ]);


            },
            "image/webp",
            quality / 100
          );


        };


        img.src =
          e.target?.result as string;


      };


      reader.readAsDataURL(file);


    });


  };



  return (

    <main className="min-h-screen bg-gray-100 p-10">


      <div className="
        max-w-4xl 
        mx-auto 
        bg-white 
        rounded-xl 
        p-8
        shadow
      ">


        <h1 className="
          text-3xl 
          font-bold 
          text-center
          mb-8
        ">
          Bulk Image WebP Converter
        </h1>



        <div className="
          border-2
          border-dashed
          border-gray-400
          rounded-lg
          p-10
          text-center
        ">


          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
          />



          <div className="mt-6">


            <label>
              Compression Quality:
              <strong>
                {" "}{quality}%
              </strong>
            </label>



            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e)=>
                setQuality(
                  Number(e.target.value)
                )
              }
              className="
                w-full
                mt-3
              "
            />


          </div>



          <button
            onClick={convertImages}
            className="
              mt-6
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Convert Images
          </button>


        </div>



        <div className="mt-8 space-y-4">


          {results.map((item,index)=>(


            <div
              key={index}
              className="
                flex
                items-center
                gap-5
                bg-gray-50
                p-4
                rounded-lg
              "
            >


              <img
                src={item.url}
                alt="preview"
                className="
                  w-32
                  h-24
                  object-cover
                  rounded
                "
              />



              <div className="flex-1">


                <p className="font-semibold">
                  {item.name}
                </p>


                <p>
                  Original:
                  {" "}
                  {item.original} KB
                </p>


                <p>
                  WebP:
                  {" "}
                  {item.compressed} KB
                </p>


              </div>



              <a
                href={item.url}
                download={
                  item.name
                  .split(".")[0]
                  +
                  ".webp"
                }
              >

                <button
                  className="
                    bg-green-600
                    text-white
                    px-4
                    py-2
                    rounded
                  "
                >
                  Download
                </button>

              </a>



            </div>


          ))}


        </div>


      </div>


    </main>

  );

}