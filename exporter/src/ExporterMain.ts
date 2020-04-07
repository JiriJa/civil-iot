import { IModelHost, SnapshotDb } from "@bentley/imodeljs-backend";
import * as path from "path";
import { Exporter } from "./Exporter";

IModelHost.startup();

const outputDir = path.join(__dirname, "out");
// const iModelFileName = "d:/data/bim/CoffsHarborSnapshot.bim";
const iModelFileName = path.join(outputDir, "sensor-sample.bim");
const iModelDb: SnapshotDb = SnapshotDb.openFile(iModelFileName);
const exporter = new Exporter(iModelDb, outputDir);
exporter.exportAll();
iModelDb.close();

IModelHost.shutdown();
