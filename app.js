var markdownpdf = require("markdown-pdf")

markdownpdf({
  cssPath: 'style.css'
})
.from("./doc.md")
.to("output/" + Date.now() + ".pdf", function () {
  console.log("Done")
})