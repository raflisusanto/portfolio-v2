/**
 * Simplified, vendor-neutral diagrams for the case studies.
 * No internal class names, endpoints or error codes: these explain the idea only.
 */
import { Arrow, Box, Canvas, Label, Sticky } from "./Sketch";

/** MaxstreamTV: one active stream per user via DRM license renewal. */
export const DrmSessionDiagram = () => (
  <Canvas
    width={480}
    height={520}
    label="DRM session flow: play, request a license, play while renewing the license periodically, then tear down the session so another device can play."
    caption="Simplified DRM session flow (one active stream per user)"
  >
    <Box x={140} y={18} w={140} h={46} color="blue" lines={["Play"]} />
    <Arrow points={[[210, 64], [210, 102]]} label="content token" labelAt={[210, 83]} />

    <Box x={100} y={102} w={220} h={58} color="violet" lines={["License request", "to the DRM service"]} />
    <Arrow points={[[320, 131], [352, 131]]} />
    <Box x={352} y={98} w={118} h={66} color="red" lines={["Retry, then", "clear error", "+ code on UI"]} size={13} />
    <Label x={336} y={116} lines={["fail"]} size={11} bold={false} color="#5c5f66" />

    <Arrow points={[[210, 160], [210, 204]]} label="license OK" labelAt={[210, 182]} />
    <Box x={100} y={204} w={220} h={58} color="green" lines={["Playing", "1 active session"]} />

    {/* renewal loop = the "heartbeat" */}
    <Box x={340} y={290} w={130} h={74} color="orange" lines={["Renew license", "every few min", "(heartbeat)"]} size={14} />
    <Arrow d="M320 240 C 380 240, 405 255, 405 288" />
    <Arrow d="M340 340 C 300 340, 280 300, 280 264" />

    <Arrow points={[[180, 262], [180, 340]]} label="player closed" labelAt={[180, 300]} />
    <Box x={80} y={340} w={200} h={58} color="violet" lines={["Teardown", "release the session"]} />
    <Arrow points={[[180, 398], [180, 440]]} />
    <Box x={80} y={440} w={200} h={52} color="green" lines={["Session released"]} />

    <Sticky x={316} y={410} w={150} h={88} rotate={3} lines={["Device B can't play", "until A's session", "ends or expires"]} />
    <Sticky x={10} y={196} w={84} h={70} rotate={-4} size={12} lines={["Media3", "renews it", "for us"]} />
  </Canvas>
);

/** Erafone: one codebase, two stores via product flavors. */
export const DualStoreDiagram = () => (
  <Canvas
    width={480}
    height={470}
    label="Dual-store architecture: shared app code calls platform interfaces, implemented once in a google flavor (GMS, FCM) and once in a huawei flavor (HMS Core, Push Kit), shipped to Google Play and Huawei AppGallery."
    caption="One codebase, two stores (product flavors + interfaces)"
  >
    <Box x={92} y={22} w={232} h={62} color="blue" lines={["Shared app code", "features call interfaces only"]} />
    <Sticky x={336} y={16} w={130} h={68} rotate={3} lines={["Huawei version:", "built solo"]} />

    <Arrow points={[[208, 84], [208, 118]]} />
    <Box x={30} y={118} w={420} h={100} color="violet">
      <Label x={240} y={142} lines={["Platform interfaces"]} />
      {["Push", "Maps", "Analytics", "Login", "Updates"].map((name, i) => (
        <Box key={name} x={44 + i * 80} y={164} w={72} h={36} color="grey" lines={[name]} size={13} />
      ))}
    </Box>

    <Arrow points={[[160, 218], [120, 270]]} />
    <Arrow points={[[320, 218], [360, 270]]} />
    <Box x={30} y={270} w={180} h={66} color="green" lines={["google flavor", "GMS · FCM"]} />
    <Box x={270} y={270} w={180} h={66} color="orange" lines={["huawei flavor", "HMS Core · Push Kit"]} />

    <Arrow points={[[120, 336], [120, 384]]} />
    <Arrow points={[[360, 336], [360, 384]]} />
    <Box x={45} y={384} w={150} h={50} color="grey" lines={["Google Play"]} />
    <Box x={275} y={384} w={170} h={50} color="grey" lines={["Huawei AppGallery"]} />
    <Label x={240} y={452} lines={["each build ships only its own SDKs"]} size={12} bold={false} color="#5c5f66" />
  </Canvas>
);

/** Inti Utama: server-driven UI. */
export const ServerDrivenUiDiagram = () => (
  <Canvas
    width={480}
    height={530}
    label="Server-driven UI: the server sends screen JSON and routes, a dynamic router picks the page, a JSON parser maps sections to widgets from a standard library, and the screen renders at runtime. Unknown components fall back safely."
    caption="Server-driven UI, simplified"
  >
    <Sticky x={10} y={14} w={118} h={74} rotate={-4} lines={["UI change =", "new JSON,", "not a new build"]} />
    <Box x={150} y={22} w={200} h={60} color="blue" lines={["Server", "screen JSON + routes"]} />
    <Arrow points={[[250, 82], [250, 118]]} label="page JSON" labelAt={[250, 100]} />

    <Box x={150} y={118} w={200} h={58} color="violet" lines={["Dynamic router", "which page for this URL?"]} />
    <Arrow points={[[250, 176], [250, 210]]} />

    <Box x={150} y={210} w={200} h={58} color="violet" lines={["JSON parser", "section → widget type"]} />
    <Arrow d="M350 250 C 400 250, 420 270, 420 300" label="unknown?" labelAt={[412, 264]} />
    <Box x={364} y={300} w={108} h={70} color="red" lines={["Safe fallback", "no crash"]} size={13} />

    <Arrow points={[[250, 268], [250, 300]]} />
    <Box x={100} y={300} w={250} h={104} color="green">
      <Label x={225} y={322} lines={["Standard widget library"]} size={14} />
      {[0, 1, 2].map((i) => (
        <Box key={i} x={114 + i * 76} y={346} w={70} h={40} color="grey" lines={["Widget"]} size={13} />
      ))}
    </Box>

    <Arrow points={[[225, 404], [225, 446]]} />
    <Box x={125} y={446} w={200} h={58} color="blue" lines={["Screen", "rendered at runtime"]} />

    {/* navigation loops back through the router */}
    <Arrow d="M125 475 C 30 475, 30 147, 148 147" label="next route" labelAt={[52, 300]} />
  </Canvas>
);

/** SANFIND: native bridges + web-hosted payment. */
export const FlutterBridgesDiagram = () => (
  <Canvas
    width={480}
    height={480}
    label="Flutter app calls native code through platform channels: Kotlin on Android for in-app updates and RASP security checks, and iOS for in-app update prompts. It opens a web-hosted Midtrans payment page in a WebView for installments."
    caption="Native bridges and a web-hosted payment flow"
  >
    <Box x={110} y={22} w={260} h={62} color="blue" lines={["Flutter app", "Bloc + Freezed"]} />

    <Arrow points={[[170, 84], [120, 150]]} label="MethodChannel" labelAt={[118, 112]} />
    <Box x={20} y={150} w={200} h={166} color="green">
      <Label x={120} y={170} lines={["Android (Kotlin)"]} />
      <Box x={34} y={184} w={172} h={24} color="grey" lines={["Play In-App Updates"]} size={12} />
      <Box x={34} y={214} w={172} h={24} color="grey" lines={["RASP security checks"]} size={12} />
      <Label x={120} y={260} lines={["iOS"]} />
      <Box x={34} y={274} w={172} h={24} color="grey" lines={["In-app update prompt"]} size={12} />
    </Box>

    <Arrow points={[[310, 84], [360, 150]]} label="WebView" labelAt={[356, 112]} />
    <Box x={260} y={150} w={200} h={58} color="violet" lines={["Web payment page", "on the web front end"]} />
    <Arrow points={[[360, 208], [360, 254]]} />
    <Box x={290} y={254} w={140} h={54} color="orange" lines={["Midtrans", "installments"]} />

    <Sticky x={250} y={340} w={210} h={74} rotate={2} lines={["Payment bug? Fix the web page:", "no app release,", "no store review"]} />
    <Box x={20} y={336} w={200} h={62} color="green" lines={["16 KB page size ✓", "Android 15+ ready"]} />
    <Label x={120} y={416} lines={["all native deps upgraded"]} size={12} bold={false} color="#5c5f66" />
  </Canvas>
);

/** UDMS: native modules + Appium groundwork. */
export const RnTestingDiagram = () => (
  <Canvas
    width={480}
    height={480}
    label="React Native app with Java native modules for location and RASP security, driven by an Appium test suite through stable test IDs, which laid the groundwork for a later device farm."
    caption="Native modules and automated UI tests"
  >
    <Box x={150} y={22} w={200} h={62} color="blue" lines={["React Native app", "TypeScript · Expo"]} />
    <Arrow points={[[250, 84], [250, 134]]} label="native bridge" labelAt={[250, 108]} />
    <Box x={130} y={134} w={240} h={100} color="green">
      <Label x={250} y={156} lines={["Java native modules"]} />
      <Box x={146} y={180} w={100} h={38} color="grey" lines={["Location"]} size={13} />
      <Box x={254} y={180} w={100} h={38} color="grey" lines={["RASP"]} size={13} />
    </Box>

    <Box x={20} y={290} w={190} h={70} color="violet" lines={["Appium test suite", "stable test IDs"]} />
    <Arrow d="M70 290 L70 53 L148 53" label="drives the UI" labelAt={[70, 200]} />

    <Arrow points={[[210, 325], [290, 325]]} dashed />
    <Box x={290} y={294} w={172} h={62} color="grey" dashed lines={["Device farm", "(built later)"]} />
    <Label x={250} y={308} lines={["groundwork"]} size={11} bold={false} color="#5c5f66" />

    <Sticky x={20} y={392} w={200} h={70} rotate={-2} lines={["Flaky tests from timing", "and loading states:", "made stable"]} />
    <Sticky x={262} y={388} w={200} h={74} rotate={2} lines={["Shared folder structure", "+ docs, so the whole", "team can write tests"]} />
  </Canvas>
);
