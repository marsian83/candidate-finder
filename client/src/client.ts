import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/index";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://127.0.0.1:7500/trpc",
    }),
  ],
});

export async function main() {
  const result = await client.logToServer.mutate("asnd");
  console.log(result);
}
