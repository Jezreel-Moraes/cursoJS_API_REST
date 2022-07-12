import app from "./app";

require("dotenv").config();

app.listen(process.env.APP_PORT, () => {
  console.log("\nEscutando na porta:", process.env.APP_PORT);
  console.log(process.env.APP_URL);
});
