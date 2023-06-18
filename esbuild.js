const { build } = require("esbuild");
const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
const metadata = require("./desktopshaders@onesandzer0s/metadata.json");

build({
    entryPoints: ['extension.ts'],
    outdir: 'dist',
    bundle: true,
    // Do not remove the functions `enable()`, `disable()` and `init()`
    treeShaking: false,
    // firefox60  // Since GJS 1.53.90
    // firefox68  // Since GJS 1.63.90
    // firefox78  // Since GJS 1.65.90
    // firefox91  // Since GJS 1.71.1
    // firefox102 // Since GJS 1.73.2
    target: "firefox78",
    platform: "node",
    // platform: "neutral",
    // mainFields: ['main'],
    // conditions: ['require', 'default'],
    // format: 'cjs',
    external: ['gi://*', 'system', 'gettext', 'cairo'],
}).then(() => {
    const distFile = path.resolve(__dirname, "dist/extension.js");
    const distDist = path.resolve(__dirname, "desktopshaders@onesandzer0s/3.2/extension.js");
    // const zipFilename = `${metadata.uuid}.zip`;
    // const zipDist = path.resolve(__dirname, zipFilename);
    fs.copyFileSync(distFile, distDist);

    // const zip = new AdmZip();
    // zip.addLocalFolder(path.resolve(__dirname, "dist"));
    // zip.writeZip(zipDist);

    // console.log(`Build complete. Zip file: ${zipFilename}\n`);
    // console.log(`Install with: gnome-extensions install ${zipFilename}`)
    // console.log(`Update with: gnome-extensions install ${zipFilename} --force`)
    // console.log(`Enable with: gnome-extensions enable ${metadata.uuid} --user`)
});
