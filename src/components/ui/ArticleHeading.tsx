import React from "react";
export default function ArticleHeading(props) {
    return (
      <div className="w-full mt-3 mb-3 text-gray-800 lg:px-[200px]">
          <div className="text-center p-5 font-sans mb-5 text-3xl font-semibold">
              {props.title}
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-4 flex align-middle">
              <div className="text-center text-sm w-auto">{props.subtitle}</div>
              <div className="w-auto flex">
                  <span className="text-sm hidden md:inline">●</span>
                  <span className="text-sm w-full text-center">By {props.author}</span>
                  <span className="text-sm hidden md:inline">●</span>
              </div>
              <div className="text-center text-sm w-auto">{props.date}</div>
          </div>
          <div className="float-right font-ui tracking-wider text-md mb-2">
              <button onClick={props.btnEdit}>Edit</button>
              <span className="px-2">|</span>
              <button onClick={props.btnDelete}>Delete</button>
          </div>
      </div>
    );
}