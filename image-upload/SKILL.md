---
name: image-upload
description: Upload images to file hosting. Use for PR screenshots.
---

## catbox.moe

```bash
curl -F "reqtype=fileupload" -F "fileToUpload=@<path>" https://catbox.moe/user/api.php
```

Returns URL.
