import t from "../trpc";

const indexRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") {
        return v;
      }
      throw new Error("please give string na buddhu");
    })
    .mutation((req) => {
      console.log(`client says ${req.input}`);
      return true;
    }),
});

export default indexRouter;
