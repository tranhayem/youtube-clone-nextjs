import { HydrateClient, trpc } from "~/trpc/server";

import { PageClient } from "./client";

import { Suspense } from "react";

export default function Home() {
  void trpc.hello.prefetch({ text: "from server" });

  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <PageClient />
      </Suspense>
    </HydrateClient>
  );
}
