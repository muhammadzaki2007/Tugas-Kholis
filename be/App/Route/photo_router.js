module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const uploadController = require('../Controllers/photo_controllers');
    
    router.post('/upload', uploadController.uploadFiles);
    router.get('/images', uploadController.getImages);
    
    module.exports = router;
    
    app.use('/api', router);
    }