"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var mongoose_1 = require("mongoose");
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
var body_parser_1 = require("body-parser");
var controllers_1 = require("./controllers");
var configs_1 = require("./utils/configs");
dotenv.config();
var PORT = process.env.PORT || 4000;
var app = express_1.default();
app.use(compression_1.default());
app.use(cors_1.default());
app.use(body_parser_1.json());
app.post('/movieDump', controllers_1.postMovieDump);
app.get('/getMovies', controllers_1.getMovies);
app.listen(PORT, function () {
    mongoose_1.connect(process.env.MONGO, configs_1.mongoConfig)
        .then(function () { return console.log('Mongo Connected'); })
        .catch(function (err) { return console.error("MONGO IS NOT RUNNING -- " + err); });
    console.log("The server is running on Port " + PORT);
});
//# sourceMappingURL=server.js.map