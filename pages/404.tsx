import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <div>Uppps</div>
      <Link href="/">Back to Home</Link>
    </>
  );
};

export default NotFound;
