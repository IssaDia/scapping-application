import app  from "./init/app";
import router from "./routes/data";

const server = app.use("/", router);


export default server;


