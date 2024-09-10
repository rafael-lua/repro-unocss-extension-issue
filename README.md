## Bug repro

1. Clone repository
2. Install deps - `yarn`
3. Open unocss.config.ts
4. Check if `rules: [["table", { display: "table" }]]` has the autocomplete working
5. Change the import to use the alias by uncommenting `// import { toMutable } from "@/utils/types"`
6. Wait unocss extension rerun with the new config
7. It should hang and not work anymore
8. Change the import back and see if it comeback (on mine, it only comes back after a `reload window`)
