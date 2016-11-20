#!/bin/bash

#Python modules required for running AWS modules
pip install boto
pip install boto3
pip install botocore

#ENV variables
#export AWS_ACCESS_KEY_ID=access_key
#export AWS_SECRET_ACCESS_KEY=secret
export EC2_INI_PATH=/home/asand/workspace/uxpin-task/ansible/ec2.ini
export ANSIBLE_HOST_KEY_CHECKING=False
