import aws from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'

import config from '../config'

const s3 = new aws.S3({
  endpoint: config.aws.s3.endpoint
})

const defaultOpts = (filepath: string, project: string): PutObjectRequest => ({
  Bucket: 'chile-sh',
  Key: project ? `${project}/${filepath}` : filepath
})

export const upload = async (
  body: Buffer | string,
  filepath: string,
  project = config.projectName,
  s3Opts = defaultOpts(filepath, project)
) => {
  return s3
    .putObject({
      ...defaultOpts(filepath, project),
      Body: typeof body === 'string' ? Buffer.from(body, 'binary') : body,
      ACL: 'public-read',
      ...s3Opts
    })
    .promise()
}

export default s3
