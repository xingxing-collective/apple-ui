import { type SFCWithInstall, withInstall } from "@apple-ui/utils"
import Alert from "./src/alert.vue"

export const AiAlert: SFCWithInstall<typeof Alert> =
  withInstall(Alert)

export * from "./src/alert"

export default AiAlert