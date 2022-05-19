import React from "react";

export default function ArticleText(props) {
    return (
      <div dangerouslySetInnerHTML={{__html: props.innerHtml}}
      className="w-full mt-8 text-justify font-serif md:prose-lg prose-md lg:px-[200px]">
      </div>
    );
}