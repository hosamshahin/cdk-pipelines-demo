import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
// aws-cdk-lib » aws_secretsmanager » Secret

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('hosamshahin/cdk-pipelines-demo', 'main', {
          authentication: cdk.SecretValue.secretsManager(
            'lambda_container_cdk_pipeline_github', {
            jsonField: 'github'
          })
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
  }
}