import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="titulo-form text-gray-700 font-bold mb-10">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <iframe
          className="video w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pryCpHK-LdY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Fbu6Z-tGrNE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wmXpK8VxKTY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bwx0PMymjgE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pXKm7gAfzTU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Blog;
