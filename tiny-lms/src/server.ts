import { Core } from "./core/core.ts";

import { LmsApi } from "./api/lms/index.ts";

const core = new Core();

new LmsApi(core).init();


core.router.get('/', (req, res) => {
  res.status(200).json('ola');
});

core.init();