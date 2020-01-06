# ecs-docker-demo
This repo is validated through following test steps:
1. Create ECS cluster
2. Create Service within the ECS cluster, when adding port mappings, use 0 for host port in portmappings, because we want to deploy tasks of same task definitions
to the same instance.
3. Create Application Load Balancer and target group
4. Use AWS CodeBuild to build an image and push to AWS ECR
5. Use AWS CodeDeploy to deploy artifact from step 4 to AWS ECS Service
6. Use AWS CodePipeline to chain step 4 and step 5.
