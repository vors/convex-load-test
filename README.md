# convex-load-test

The repo is for repro steps for convex team to investigate the load testing questions.

## Repro

Get things up and running

```
npm i
npm run dev
```

In the browser enter message 3 times (that would add 24000 messages to database).

Notice the `listMessage.js` file that tries to query+filter.

```js
import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(async ({ db }) => {
  const id = new Id("messages", "3CzSDf2QdHc3P4N2XHdL1g");
  const messages = await db
    .query("messages")
    .filter((q) => q.eq(q.field("_id"), id))
    .collect();
  return messages.length;
});
```

If you refresh the page to trigger the query, you will get this crash on convex dashboard.

```
2/25/2023, 7:51:04 PM
813ms
failure
Query
listMessages
failure
Uncaught Error: Too many documents read in a single function execution (maximum 16384)
```
