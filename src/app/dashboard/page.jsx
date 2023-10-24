"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      //page no need to refresh - use mutate() function.
      mutate();
      // to clear inputs
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });
      //page no need to refresh - use mutate() function.
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      width={200}
                      height={100}
                      src={post.img}
                      alt=""
                    ></Image>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            type="text"
            placeholder="Content"
            className={styles.textArea}
          />
          <button className={styles.button}>Publish</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
