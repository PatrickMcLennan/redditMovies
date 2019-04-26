"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var MovieSchema = new mongoose_1.Schema({
    movieTitle: {
        type: String,
        required: 'Each movie needs a title'
    },
    movieHref: {
        type: String,
        required: 'Each movie needs a href'
    },
    movieThumbnail: {
        type: String,
        required: 'Each movie needs a thumbnail link'
    }
});
exports.Movie = mongoose_1.model('Movie', MovieSchema);
//# sourceMappingURL=MovieSchema.js.map