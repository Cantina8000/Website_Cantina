const deployConf = {
  user: "cancancantina.xyz",
  // Password optional, prompted if none given
  password: "wpg39EeRG2fF",
  host: "linux392.unoeuro.com",
  port: 21,
  localRoot: "", // This is set in eleventy.js conf file // __dirname + "/local-folder",
  remoteRoot: "/public_html/",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: [
    "*.php",
    "*.css",
    "*.js",
    "*.json",
    "*.html",
    "*.jpg",
    "*.jpeg",
    "*.gif",
    "*.png",
    "*.woff",
    "*.woff2",
    "*.eot",
    "*.pdf",
    "*.doc",
    "*.docx",
    "*.rtf",
    "*.ttf",
    "*.txt",
    "dist/*",
    "*.svg",
    "*.mp4",
    "*.mov",
    "*.webm",
    "*.mpeg4",
    "*.mp3",
    "*.ogg",
    "*.aiff",
    "*.wav",
    ".*"
  ],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true
};

module.exports = deployConf;