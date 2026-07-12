# MCP Hosting Provider Directory

A categorized list of hosting, cloud, backend, database, AI, media, container, and code-hosting providers with first-party MCP servers or documented MCP server hosting paths.

Last verified: **July 12, 2026**

## Table of Contents

* [Providers by Category](#providers-by-category)
  * [Shared and Managed Web Hosting](#shared-and-managed-web-hosting)
  * [App and Edge Hosting](#app-and-edge-hosting)
  * [Cloud Infrastructure](#cloud-infrastructure)
  * [Backend, Database, and Search Hosting](#backend-database-and-search-hosting)
  * [AI, Media, and Container Hosting](#ai-media-and-container-hosting)
  * [Code Hosting](#code-hosting)
* [Inclusion Rules](#inclusion-rules)
* [Security Note](#security-note)
* [Contribute](#contribute)

## Providers by Category

### Shared and Managed Web Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| Hostinger | MCP server for Hostinger API with scoped binaries for hosting, VPS, WordPress, domains, DNS, ecommerce, billing, agency hosting, and related Hostinger tools. | [Hostinger API MCP Server](https://github.com/hostinger/api-mcp-server) |
| InterServer | Official InterServer KB article for its MCP server for AI hosting automation. | [InterServer MCP Server](https://www.interserver.net/tips/kb/interserver-mcp-server-ai-hosting-automation/) |

### App and Edge Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| Vercel | Remote MCP server for Vercel docs, projects, deployments, and logs. Vercel also documents deploying MCP servers to Vercel. | [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) |
| Netlify | MCP server for creating projects, building, deploying, managing resources, extensions, forms, env vars, and teams. | [Netlify MCP](https://github.com/netlify/netlify-mcp) |
| Cloudflare | Managed MCP servers for Cloudflare workflows plus Workers-based guides for building and deploying remote MCP servers. | [Cloudflare Agents MCP docs](https://developers.cloudflare.com/agents/llms.txt) |
| Heroku | Platform MCP server for reading, managing, and operating Heroku apps and resources. | [Heroku MCP Server](https://github.com/heroku/heroku-mcp-server) |
| Render | MCP server for web services, static sites, cron jobs, databases, logs, deployments, metrics, and Postgres queries. | [Render MCP Server](https://github.com/render-oss/render-mcp-server) |
| Railway | Local CLI-backed MCP server and hosted remote MCP server at `https://mcp.railway.com`. | [Railway MCP docs](https://docs.railway.com/cli/mcp) |
| DigitalOcean | MCP integration for managing DigitalOcean resources through the DigitalOcean API. | [DigitalOcean MCP](https://github.com/digitalocean-labs/mcp-digitalocean) |
| Fly.io | Local MCP server that wraps `flyctl` for Fly.io workflows. | [FlyMCP](https://github.com/superfly/flymcp) |
| Koyeb | MCP server for managing Koyeb apps, services, deployments, instances, logs, and one-click apps. | [Koyeb MCP Server](https://github.com/koyeb/mcp-server-koyeb) |

### Cloud Infrastructure

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| AWS | Official AWS MCP Servers collection covering AWS docs, infrastructure, containers, serverless, and related AWS workflows. | [AWS Labs MCP](https://github.com/awslabs/mcp) |
| Microsoft Azure | Azure MCP Server for connecting agents to Azure context and Azure service operations. | [Azure MCP Server](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md) |
| Google Cloud | Cloud Run MCP server for deploying apps to Cloud Run, plus Gemini Cloud Assist remote MCP endpoints for cloud operations. | [Cloud Run MCP](https://github.com/GoogleCloudPlatform/cloud-run-mcp) |
| Oracle Cloud Infrastructure | OCI-focused MCP servers, including OCI Cloud MCP Server and OCI API MCP Server. | [Oracle MCP](https://github.com/oracle/mcp) |
| IBM Cloud | IBM Cloud MCP servers for cloud automation, logs, registry, events, Kubernetes/OpenShift, monitoring, object storage, serverless, VPC, and PowerVS. | [IBM Cloud MCP](https://ibm-cloud.github.io/mcp/) |
| IONOS Cloud | Read-only MCP server with tools for Compute Engine, Kubernetes, Object Storage, DNS, Billing, Certificate Manager, and Activity Log. | [IONOS Cloud MCP](https://github.com/ionos-cloud/ionoscloud-mcp) |
| HashiCorp | Terraform MCP server for Terraform Registry APIs and HCP Terraform / Terraform Enterprise workspaces. | [Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server) |

### Backend, Database, and Search Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| Supabase | Hosted MCP server for projects, databases, Edge Functions, logs, advisors, docs, and storage workflows. | [Supabase MCP Server](https://supabase.com/docs/guides/ai-tools/mcp) |
| Neon | Remote MCP server for Postgres projects, branches, SQL, migrations, query tuning, auth, and documentation tools. | [Neon MCP Server](https://neon.com/docs/ai/neon-mcp-server) |
| MongoDB Atlas | MCP server for MongoDB databases, Atlas tools, and MongoDB assistant tools. | [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server) |
| Redis / Redis Cloud | MCP server for Redis data operations across strings, hashes, lists, sets, streams, JSON, pub/sub, and search workflows. | [Redis MCP Server](https://github.com/redis/mcp-redis) |
| Upstash | MCP server for managing and debugging Upstash Redis, QStash, Workflow, and Upstash Box resources. | [Upstash MCP Server](https://github.com/upstash/mcp-server) |
| PlanetScale | Hosted MCP server for PlanetScale workflows, with open-source TypeScript tool implementations in the public repo. | [PlanetScale MCP Server](https://github.com/planetscale/mcp-server) |
| DataStax Astra DB | MCP server for Astra DB collections, records, bulk operations, vector search, and hybrid search. | [Astra DB MCP Server](https://github.com/datastax/astra-db-mcp) |
| Elastic | Elastic Agent Builder MCP endpoint for Elastic 9.2+ and Elasticsearch Serverless, with deprecated Docker Elasticsearch MCP server preserved. | [Elasticsearch MCP Server](https://github.com/elastic/mcp-server-elasticsearch) |
| Pinecone | MCP server for retrieving information from Pinecone Assistant. | [Pinecone Assistant MCP](https://github.com/pinecone-io/assistant-mcp) |
| Qdrant | Official MCP server for storing and retrieving semantic memory in Qdrant. | [Qdrant MCP Server](https://github.com/qdrant/mcp-server-qdrant) |
| Weaviate | Built-in MCP server inside Weaviate for schemas, tenants, hybrid queries, and object upserts. | [Weaviate MCP Server](https://github.com/weaviate/mcp-server-weaviate) |
| Zilliz Cloud | MCP server for Milvus and Zilliz Cloud cluster provisioning, metrics, collection management, inserts, and semantic search. | [Zilliz MCP Server](https://github.com/zilliztech/zilliz-mcp-server) |

### AI, Media, and Container Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| Cloudinary | Hosted and local MCP servers for asset management, environment config, structured metadata, analysis, and MediaFlows. | [Cloudinary MCP Servers](https://github.com/cloudinary/mcp-servers) |
| Hugging Face | Remote MCP server for connecting agents to the Hugging Face Hub and Gradio applications. | [Hugging Face MCP Server](https://github.com/huggingface/hf-mcp-server) |
| Docker Hub | MCP server for Docker Hub content discovery and repository/image management workflows. | [Docker Hub MCP Server](https://github.com/docker/hub-mcp) |

### Code Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| GitHub | Official MCP server for repositories, issues, pull requests, Actions, releases, security findings, and workflow data. | [GitHub MCP Server](https://github.com/github/github-mcp-server) |

## Inclusion Rules

This list includes providers that meet at least one of these criteria:

* The provider publishes a first-party MCP server.
* The provider offers a provider-managed MCP endpoint.
* The provider has first-party documentation for hosting or deploying MCP servers on its platform.
* The provider officially links to a replacement MCP server from a provider-run labs or product org.

Community-only MCP servers are not included unless the provider officially links to, maintains, or documents them.

## Security Note

MCP servers can expose tools with the same privileges as the account that authorizes them. Prefer read-only scopes, development projects, least-privilege tokens, and manual approval for tool calls that change infrastructure, data, billing, or production deployments.

## Contribute

Open an issue or pull request with:

* Provider name
* Official MCP server or documentation URL
* Endpoint or install command, if public
* Short note on what tools the MCP server exposes
* Whether it is official, beta, preview, labs, reference, deprecated, or community-maintained
