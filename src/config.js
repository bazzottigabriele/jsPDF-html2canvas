module.exports.defaultOpts = {
  jsPDF: {
      unit: 'px',
      format: 'a4',
  },
  html2canvas: {
      imageTimeout: 15000,
      logging: true,
      useCORS: false,
  },
  imageType: 'image/jpeg',
  output: 'js.pdf',
  success(pdf) {
      pdf.save(this.output)
  },
  margin: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
  },
}
