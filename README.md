# uxpin-task

prepare-env.sh  - install additional packages and setup env variables
vote-app        - simple voting application, uses: node, angular, mongodb
                 how to run:
                 cd vote-app
                 npm install
                 npm start

ansible         - ansible playbooks and files
 roles/base     - enable automatic security updates and install pip
 rolse/docker   - role for installing docker on node
 roles/vote-app - role for installing and running vote-app on node
 ec2-create*    - playbook for setting up network and ec2 instances
 ec2-provision* - playbook for provisioning ec2 instances
 ec2.py         - script for ec2 inventory generation  https://raw.github.com/ansible/ansible/devel/contrib/inventory/ec2.py
 app*           - playbooks for managing vote-app on localhost
