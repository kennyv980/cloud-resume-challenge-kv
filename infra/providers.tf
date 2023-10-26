terraform {
  required_providers {
    aws = {
        version = "5.22.0"
        source = "hashicorp/aws"
    }
  }
}

provider "aws" {
    access_key = aws_access_key
    secret_key = aws_secret_key
    region = "us-east-1"
  
}