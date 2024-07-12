import * as traceloop from "@traceloop/node-server-sdk";

export const initObservability = () => {
  traceloop.initialize({
    disableBatch: true,
    apiKey:
      "d183996b6e5a4462949251b2a8b6b42bdb31656542d72f512a9a606b9741a5df3b4f40e234cdae2d81e7d79b38304bab",
  });
};
