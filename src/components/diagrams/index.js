import {
  DrmSessionDiagram,
  DualStoreDiagram,
  FlutterBridgesDiagram,
  RnTestingDiagram,
  ServerDrivenUiDiagram,
} from "./CaseStudyDiagrams";

/** Diagram keys used by `caseStudies` in data/content.js. */
export const diagrams = {
  drm: DrmSessionDiagram,
  dualStore: DualStoreDiagram,
  sdui: ServerDrivenUiDiagram,
  flutterBridges: FlutterBridgesDiagram,
  rnTesting: RnTestingDiagram,
};
