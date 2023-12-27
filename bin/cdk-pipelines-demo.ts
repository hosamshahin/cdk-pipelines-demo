#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/cdk-pipelines-demo-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack');

app.synth();