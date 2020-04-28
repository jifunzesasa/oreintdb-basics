// Connect

const OrientDBClient = require("orientjs").OrientDBClient;

let client = await OrientDBClient.connect({
  host: "localhost",
  port: 2424,
});

let pool = await client.sessions({
  name: "demodb",
  username: "admin",
  password: "admin",
  pool: { max: 10 },
});
// acquire a session from the pool
let session = await pool.acquire();
// use the session
//  ...
// release the session
await session.close();
// close the pool
await pool.close();

await client.close();

console.log("Client Closed");
