/// <reference types="node" />
import aws from 'aws-sdk';
declare const s3: aws.S3;
export declare const upload: (body: string | Buffer, filepath: string, project?: string, s3Opts?: any) => Promise<import("aws-sdk/lib/request").PromiseResult<aws.S3.PutObjectOutput, aws.AWSError>>;
export default s3;
