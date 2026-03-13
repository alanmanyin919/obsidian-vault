# AZ-104 Identity, Governance, and Access

## Core Concepts
- Microsoft Entra ID tenants, users, groups, and administrative units
- Subscriptions and management boundaries
- Resource groups as deployment and lifecycle containers
- RBAC for authorization at management group, subscription, resource group, or resource scope

## Know How To Do
- Create and manage users and groups
- Assign built-in roles at the correct scope
- Use tags to organize resources
- Apply resource locks to prevent accidental deletion or modification
- Use Azure Policy to enforce or audit standards

## Exam Traps
- Confusing authentication with authorization
- Using overly broad role scope
- Treating tags as security controls
- Forgetting inheritance of RBAC assignments from higher scopes

## Practice Tasks
- Create a resource group and apply tags
- Assign `Reader`, `Contributor`, and a VM-specific role to different identities
- Add a delete lock to a critical resource group
- Create a policy assignment that audits allowed locations
