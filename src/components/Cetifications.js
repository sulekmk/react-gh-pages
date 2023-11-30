/** @format */
import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { nodes } from "../data";

export default function Certifications() {
  const theme = useTheme({
    HeaderRow: `
        background-color: #eaf5fd;
        border:1px solid red;
      `,
    Row: `
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
                      text-align:center;

        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
                      text-align:center;


        }
      `,
    Table: `.css-73fo9o-HEADER_CELL_CONTAINER_STYLE-HeaderCell{
            text-align:center;
        }`,
  });

  const data = { nodes };
  const COLUMNS = [
    {
      label: "Title",
      renderCell: (item) => item.title,
    },
    {
      label: "Description",
      renderCell: (item) => item.description,
    },
    {
      label: "Image",
      renderCell: (item) => (
        <img
          alt="gallery"
          className="relative inset-0 w-12 h-12 object-cover object-center rounded-md ml-32"
          src={item.image}
        />
      ),
    },
    {
      label: "Link",
      renderCell: (item) => (
        <a
          href={item.link}
          className="inline-flex text-black bg-white-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          React Web App
        </a>
      ),
    },
  ];

  return (
    <>
      {
        <div>
          <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
              <AcademicCapIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
                Certifications
              </h1>
              <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 border-solid border-2 border-indigo-600">
                <CompactTable
                  columns={COLUMNS}
                  data={data}
                  theme={theme}
                />
              </div>
            </div>
          </section>
        </div>
      }
    </>
  );
}
