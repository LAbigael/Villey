import Busboy from "busboy";

export default {
  id: "convert-document-to-tiptap",
  handler: (router, context) => {
    const { services, getSchema } = context;
    const { FilesService } = services;
    router.get("/hello", (req, res) => {
      res.send("Hello World");
    });

    router.post("/", async (req, res, next) => {
      const filesService = new FilesService({
        schema: await getSchema(),
        accountability: req.accountability,
      });

      const busboy = Busboy({ headers: req.headers });

      busboy.on("file", async (_, fileStream, { filename, mimeType }) => {
        const data = {
          filename_download: filename,
          type: mimeType,
          storage: "local",
        };

        try {
          const primaryKey = await filesService.uploadOne(fileStream, data);

         const deleted =  await filesService.deleteOne(primaryKey);

          res.json({ status: "ok" });
        } catch (error) {
          busboy.emit("error", error);
        }
      });

      busboy.on("error", (error) => {
        next(error);
      });

      req.pipe(busboy);
    });
  },
};
