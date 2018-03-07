// 创建
exports.save = function(collection,data) {
    return new Promise((resolve, reject) => {
        new collection(data).save((err, user, num) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(user, num);
            }
        });
    });
};

// 查找
exports.find = function(collection,conditions, fileds, options) {
    return new Promise((resolve, reject) => {
        collection.find(conditions, fileds, options, (err, docs) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(docs);
            }
        });
    });
}

// 修改
exports.update = function(collection,conditions, doc, options) {
    return new Promise((resolve, reject) => {
        collection.update(conditions, doc, options, (err, raw) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(raw);
            }
        });
    });
}

// 删除
exports.remove = function(collection,conditions) {
    return new Promise((resolve, reject) => {
        collection.findByIdAndRemove(conditions, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
