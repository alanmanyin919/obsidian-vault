# AZ-104 Virtual Networking

## Core Concepts
- VNets, subnets, IP addressing, NSGs, route tables, and DNS
- Public versus private exposure
- Load balancing and connectivity across networks

## Know How To Do
- Design a VNet and subnet layout
- Apply NSGs at subnet or NIC level
- Use user-defined routes where traffic control is required
- Configure private and public DNS resolution
- Understand peering and hybrid connectivity options at a high level

## Exam Traps
- Confusing NSG evaluation with route behavior
- Forgetting subnet sizing and reserved IPs
- Assuming peered networks behave exactly like one flat network in all cases
- Missing DNS as the root cause of "network" problems

## Practice Tasks
- Create a VNet with multiple subnets
- Apply NSGs to allow SSH or RDP only from a trusted source
- Peer two VNets and validate connectivity
- Create a private DNS zone and link it to a VNet
