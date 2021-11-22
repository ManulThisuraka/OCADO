const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    productImage: function (req, file, cb) {
      cb(null, `${Date.now()}.jpg`);
    }
  })
  
  const upload = multer({ storage });


  module.exports = upload;