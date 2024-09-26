const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
  const text = req.body.anonymous_text;
  const image = req.file.path;
  // 存储 text 和 image 到数据库
  res.send('上传成功');
});

