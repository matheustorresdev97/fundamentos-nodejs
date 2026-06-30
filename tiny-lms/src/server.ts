import { Core } from "./core/core.ts";

import { AuthApi } from "./api/auth/index.ts";
import { LmsApi } from "./api/lms/index.ts";


const core = new Core();

new AuthApi(core).init();
new LmsApi(core).init();

core.router.get('/', (req, res) => {
  res.status(200).json('ola');
});

core.init();