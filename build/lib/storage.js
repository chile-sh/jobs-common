"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const config_1 = __importDefault(require("../config"));
const s3 = new aws_sdk_1.default.S3({
    endpoint: config_1.default.aws.s3.endpoint
});
const defaultOpts = (filepath, project) => ({
    Bucket: 'chile-sh',
    Key: project ? `${project}/${filepath}` : filepath
});
exports.upload = async (body, filepath, project = config_1.default.projectName, s3Opts = defaultOpts(filepath, project)) => {
    return s3
        .putObject({
        ...defaultOpts(filepath, project),
        Body: typeof body === 'string' ? Buffer.from(body, 'binary') : body,
        ACL: 'public-read',
        ...s3Opts
    })
        .promise();
};
exports.default = s3;
//# sourceMappingURL=storage.js.map