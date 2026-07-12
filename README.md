# MCP Hosting Provider Directory

<p align="center">
  A source-linked list of hosting, cloud, backend, database, AI, media, container, and code-hosting providers with first-party MCP servers or documented MCP server hosting paths.
</p>

<p align="center">
  Last verified: <b>July 12, 2026</b>
</p>

## Table of Contents

* [Provider List](#provider-list)
* [Providers by Category](#providers-by-category)
  * [App and Edge Hosting](#app-and-edge-hosting)
  * [Cloud Infrastructure](#cloud-infrastructure)
  * [Backend, Database, and Search Hosting](#backend-database-and-search-hosting)
  * [AI, Media, and Container Hosting](#ai-media-and-container-hosting)
  * [Code Hosting](#code-hosting)
* [Inclusion Rules](#inclusion-rules)
* [Security Note](#security-note)
* [Sources](#sources)
* [Contribute](#contribute)

## Provider List

Do you want to add, remove, or correct a provider? Please create a [new issue](https://github.com/mikelavrik/mcp-hosting-providers/issues).

| **PROVIDER** | **CATEGORY** | **MCP SERVER / ENDPOINT** | **ACCESS / TRANSPORT** | **STATUS** | **SOURCE** |
|:-------------|:-------------|:--------------------------|:-----------------------|:-----------|:-----------|
| Vercel | App hosting | `https://mcp.vercel.com` | Remote MCP, OAuth | Official beta | [Docs](https://vercel.com/docs/agent-resources/vercel-mcp) |
| Netlify | App hosting | `@netlify/mcp` | Local stdio via `npx` | Official | [Repo](https://github.com/netlify/netlify-mcp) |
| Cloudflare | Edge hosting | Cloudflare managed MCP servers; Workers guides for remote MCP servers | Remote MCP, Workers, Streamable HTTP | Official | [Docs index](https://developers.cloudflare.com/agents/llms.txt) |
| Heroku | App hosting | Heroku Platform MCP Server | `heroku mcp:start`, `npx`, or Heroku deploy | Official, early development | [Repo](https://github.com/heroku/heroku-mcp-server) |
| Render | App hosting | Render MCP Server | Local MCP server | Official | [Repo](https://github.com/render-oss/render-mcp-server) |
| Railway | App hosting | `railway mcp`; `https://mcp.railway.com` | Local stdio or remote HTTP | Official | [Docs](https://docs.railway.com/cli/mcp) |
| DigitalOcean | Cloud and app hosting | DigitalOcean MCP Integration | Local MCP server with API token | Official labs | [Repo](https://github.com/digitalocean-labs/mcp-digitalocean) |
| Fly.io | App hosting | FlyMCP | Local stdio wrapper for `flyctl` | Official repo | [Repo](https://github.com/superfly/flymcp) |
| Koyeb | App hosting | `@koyeb/mcp-server` | Local stdio via npm or `npx` | Official beta pre-release | [Repo](https://github.com/koyeb/mcp-server-koyeb) |
| AWS | Cloud infrastructure | AWS MCP Servers collection, including managed AWS MCP Server preview | Local and managed-preview server options | Official preview | [Repo](https://github.com/awslabs/mcp) |
| Microsoft Azure | Cloud infrastructure | Azure MCP Server | Local MCP server for Azure services | Official, generally available | [README](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md) |
| Google Cloud | Cloud infrastructure and Cloud Run hosting | Cloud Run MCP; Gemini Cloud Assist MCP | Local MCP, Gemini CLI extension, and remote MCP endpoints | Official; Gemini Cloud Assist private preview | [Cloud Run repo](https://github.com/GoogleCloudPlatform/cloud-run-mcp) |
| Oracle Cloud Infrastructure | Cloud infrastructure | Oracle OCI MCP servers | Local stdio or Streamable HTTP | Official reference / proof-of-concept | [Repo](https://github.com/oracle/mcp) |
| IBM Cloud | Cloud infrastructure | IBM Cloud MCP Servers | CLI-based and standalone MCP servers | Official | [Docs](https://ibm-cloud.github.io/mcp/) |
| HashiCorp | Infrastructure as code and HCP Terraform | Terraform MCP Server | Stdio or Streamable HTTP | Official | [Repo](https://github.com/hashicorp/terraform-mcp-server) |
| Supabase | Backend and database hosting | `https://mcp.supabase.com/mcp` | Hosted remote MCP, OAuth | Official | [Docs](https://supabase.com/docs/guides/ai-tools/mcp) |
| Neon | Postgres hosting | `https://mcp.neon.tech/mcp` | Remote MCP, OAuth or API key | Official | [Docs](https://neon.com/docs/ai/neon-mcp-server) |
| MongoDB Atlas | Database hosting | MongoDB MCP Server | Local stdio via `mongodb-mcp-server`; Atlas API credentials | Official | [Repo](https://github.com/mongodb-js/mongodb-mcp-server) |
| Redis / Redis Cloud | Database hosting | Redis MCP Server | Local stdio via PyPI or Docker | Official | [Repo](https://github.com/redis/mcp-redis) |
| Upstash | Serverless data platform | `@upstash/mcp-server` | Local stdio via `npx`; email and API key | Official | [Repo](https://github.com/upstash/mcp-server) |
| PlanetScale | Database hosting | Hosted PlanetScale MCP server; open-source tool implementations | Hosted MCP server plus local development tools | Official | [Repo](https://github.com/planetscale/mcp-server) |
| DataStax Astra DB | Database hosting | Astra DB MCP Server | Local stdio via `@datastax/astra-db-mcp` | Official | [Repo](https://github.com/datastax/astra-db-mcp) |
| Elastic | Search and analytics hosting | Elastic Agent Builder MCP endpoint; Elasticsearch MCP Server | Remote endpoint for Elastic 9.2+ / Serverless; Docker server deprecated | Official | [Repo](https://github.com/elastic/mcp-server-elasticsearch) |
| Pinecone | Vector database / AI data hosting | Pinecone Assistant MCP Server | Docker or local binary | Official | [Repo](https://github.com/pinecone-io/assistant-mcp) |
| Qdrant | Vector database hosting | Qdrant MCP Server | Local server via `uvx`; URL and API key | Official | [Repo](https://github.com/qdrant/mcp-server-qdrant) |
| Weaviate | Vector database hosting | Built-in Weaviate MCP server | Built into Weaviate `v1.37.1+` at `/v1/mcp` | Official preview | [Repo](https://github.com/weaviate/mcp-server-weaviate) |
| Zilliz Cloud | Vector database hosting | Zilliz MCP Server | Local stdio or Streamable HTTP | Official | [Repo](https://github.com/zilliztech/zilliz-mcp-server) |
| Cloudinary | Media asset hosting | Cloudinary MCP servers | Hosted remote MCP endpoints or local npm/Docker servers | Official | [Repo](https://github.com/cloudinary/mcp-servers) |
| Hugging Face | AI model and app hosting | `https://huggingface.co/mcp` | Remote MCP, token or login flow | Official | [Repo](https://github.com/huggingface/hf-mcp-server) |
| Docker Hub | Container registry hosting | Docker Hub MCP Server | Local stdio or HTTP server | Official | [Repo](https://github.com/docker/hub-mcp) |
| GitHub | Code and Pages hosting | GitHub MCP Server | Remote MCP or Docker, OAuth or PAT | Official | [Repo](https://github.com/github/github-mcp-server) |

## Providers by Category

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

## Sources

* [Vercel MCP server docs](https://vercel.com/docs/agent-resources/vercel-mcp)
* [Vercel deploy MCP servers docs](https://vercel.com/docs/mcp/deploy-mcp-servers-to-vercel)
* [Netlify MCP server repo](https://github.com/netlify/netlify-mcp)
* [Cloudflare Agents MCP docs index](https://developers.cloudflare.com/agents/llms.txt)
* [Cloudflare remote MCP server guide](https://developers.cloudflare.com/agents/model-context-protocol/guides/remote-mcp-server/)
* [Heroku MCP server repo](https://github.com/heroku/heroku-mcp-server)
* [Render MCP server repo](https://github.com/render-oss/render-mcp-server)
* [Railway MCP docs](https://docs.railway.com/cli/mcp)
* [DigitalOcean MCP repo](https://github.com/digitalocean-labs/mcp-digitalocean)
* [FlyMCP repo](https://github.com/superfly/flymcp)
* [Koyeb MCP server repo](https://github.com/koyeb/mcp-server-koyeb)
* [AWS Labs MCP servers repo](https://github.com/awslabs/mcp)
* [Azure MCP Server README](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md)
* [Google Cloud Run MCP repo](https://github.com/GoogleCloudPlatform/cloud-run-mcp)
* [Google Gemini Cloud Assist MCP repo](https://github.com/GoogleCloudPlatform/gemini-cloud-assist-mcp)
* [Oracle MCP repo](https://github.com/oracle/mcp)
* [IBM Cloud MCP docs](https://ibm-cloud.github.io/mcp/)
* [HashiCorp Terraform MCP server repo](https://github.com/hashicorp/terraform-mcp-server)
* [Supabase MCP Server docs](https://supabase.com/docs/guides/ai-tools/mcp)
* [Neon MCP Server docs](https://neon.com/docs/ai/neon-mcp-server)
* [MongoDB MCP server repo](https://github.com/mongodb-js/mongodb-mcp-server)
* [Redis MCP server repo](https://github.com/redis/mcp-redis)
* [Upstash MCP server repo](https://github.com/upstash/mcp-server)
* [PlanetScale MCP server repo](https://github.com/planetscale/mcp-server)
* [DataStax Astra DB MCP repo](https://github.com/datastax/astra-db-mcp)
* [Elastic Elasticsearch MCP server repo](https://github.com/elastic/mcp-server-elasticsearch)
* [Pinecone Assistant MCP repo](https://github.com/pinecone-io/assistant-mcp)
* [Qdrant MCP server repo](https://github.com/qdrant/mcp-server-qdrant)
* [Weaviate MCP server repo](https://github.com/weaviate/mcp-server-weaviate)
* [Zilliz MCP server repo](https://github.com/zilliztech/zilliz-mcp-server)
* [Cloudinary MCP servers repo](https://github.com/cloudinary/mcp-servers)
* [Hugging Face MCP server repo](https://github.com/huggingface/hf-mcp-server)
* [Docker Hub MCP server repo](https://github.com/docker/hub-mcp)
* [GitHub MCP Server repo](https://github.com/github/github-mcp-server)

## Contribute

Open an issue or pull request with:

* Provider name
* Official MCP server or documentation URL
* Endpoint or install command, if public
* Short note on what tools the MCP server exposes
* Whether it is official, beta, preview, labs, reference, deprecated, or community-maintained
