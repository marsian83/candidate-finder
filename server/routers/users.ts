import t from "../trpc";

const indexRouter = t.router({
  secret: t.procedure.query(() => {
    return process.env.SECRET;
  }),
});

export default indexRouter;
