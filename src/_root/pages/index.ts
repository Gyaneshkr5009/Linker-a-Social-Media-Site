export { default as Home } from "./Home";
export { default as Explore } from "./Explore";
export { default as Saved } from "./Saved";
export { default as CreatePost } from "./CreatePost";
export { default as Profile } from "./Profile";
export { default as UpdateProfile } from "./UpdateProfile";
export { default as EditPost } from "./EditPost";
export { default as PostDetails } from "./PostDetails";
export { default as LikedPosts } from "./LikedPosts";
export { default as AllUsers } from "./AllUsers";

//int pages file we may have multiple pages so it makes it difficult to import multiple pages in a new line
//thats why we create index.ts to export multiple pages to app.tsx in cleaner way 
//suppose a page for sidebar ,one for comment section etc; || we simple import all to a single file;