import React from "react";
import getPostMetaData from "../data/getPostMetaData";
import PostPreview from "../components/PostPreview";

function BlogsPage() {
  const postMetaData = getPostMetaData();
  // console.log(postMetaData)
  const unSortPosts = postMetaData.map((obj) => {
    return { ...obj, sort: new Date(obj.sort).getTime() };
  });
  // console.log(unSortPosts);
  //Descending Sort(high to low)
  const sortedPosts = unSortPosts.sort(
    (objA, objB) => Number(objB.sort) - Number(objA.sort)
  );

  // console.log(postMetaData)
  console.log(sortedPosts);

  const postPreviews = sortedPosts.map((post) => (
    <PostPreview post={post} key={post.slug} />
  ));
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center mb-10">Welcome To My Blogs</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-max">
        {postPreviews}
      </div>
    </div>
  );
}

export default BlogsPage;
