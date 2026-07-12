# MCP Hosting Provider Directory

<p align="center">
  A source-linked list of hosting, cloud, backend, database, and code-hosting providers with first-party MCP servers or documented MCP server hosting paths.
</p>

<p align="center">
  Last verified: <b>July 12, 2026</b>
</p>

## Table of Contents

* [Provider List](#provider-list)
* [Providers by Category](#providers-by-category)
  * [App and Edge Hosting](#app-and-edge-hosting)
  * [Cloud Infrastructure](#cloud-infrastructure)
  * [Backend and Database Hosting](#backend-and-database-hosting)
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
| Cloudflare | Edge hosting | Cloudflare managed MCP servers; Workers guides for remote MCP servers | Remote MCP, Workers, Streamable HTTP | Official | [Docs index](https://developers.cloudflare.com/agents/llms.txt) |
| AWS | Cloud infrastructure | AWS MCP Servers collection, including managed AWS MCP Server preview | Local and managed-preview server options | Official preview | [Repo](https://github.com/awslabs/mcp) |
| Microsoft Azure | Cloud infrastructure | Azure MCP Server | Local MCP server for Azure services | Official, generally available | [README](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md) |
| Supabase | Backend and database hosting | `https://mcp.supabase.com/mcp` | Hosted remote MCP, OAuth | Official | [Docs](https://supabase.com/docs/guides/ai-tools/mcp) |
| Neon | Postgres hosting | `https://mcp.neon.tech/mcp` | Remote MCP, OAuth or API key | Official | [Docs](https://neon.com/docs/ai/neon-mcp-server) |
| GitHub | Code and Pages hosting | GitHub MCP Server | Remote MCP or Docker, OAuth or PAT | Official | [Repo](https://github.com/github/github-mcp-server) |

## Providers by Category

### App and Edge Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| Vercel | Remote MCP server for Vercel docs, projects, deployments, and logs. Vercel also documents deploying MCP servers to Vercel. | [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) |
| Cloudflare | Managed MCP servers for Cloudflare workflows plus Workers-based guides for building and deploying remote MCP servers. | [Cloudflare Agents MCP docs](https://developers.cloudflare.com/agents/llms.txt) |

### Cloud Infrastructure

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| AWS | Official AWS MCP Servers collection covering AWS docs, infrastructure, containers, serverless, and related AWS workflows. | [AWS Labs MCP](https://github.com/awslabs/mcp) |
| Microsoft Azure | Azure MCP Server for connecting agents to Azure context and Azure service operations. | [Azure MCP Server](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md) |

### Backend and Database Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| Supabase | Hosted MCP server for projects, databases, Edge Functions, logs, advisors, docs, and storage workflows. | [Supabase MCP Server](https://supabase.com/docs/guides/ai-tools/mcp) |
| Neon | Remote MCP server for Postgres projects, branches, SQL, migrations, query tuning, auth, and documentation tools. | [Neon MCP Server](https://neon.com/docs/ai/neon-mcp-server) |

### Code Hosting

| **PROVIDER** | **WHAT IT OFFERS** | **LINK** |
|:-------------|:-------------------|:---------|
| GitHub | Official MCP server for repositories, issues, pull requests, Actions, releases, security findings, and workflow data. | [GitHub MCP Server](https://github.com/github/github-mcp-server) |

## Inclusion Rules

This list includes providers that meet at least one of these criteria:

* The provider publishes a first-party MCP server.
* The provider offers a provider-managed MCP endpoint.
* The provider has first-party documentation for hosting or deploying MCP servers on its platform.

Community-only MCP servers are not included unless the provider officially links to, maintains, or documents them.

## Security Note

MCP servers can expose tools with the same privileges as the account that authorizes them. Prefer read-only scopes, development projects, least-privilege tokens, and manual approval for tool calls that change infrastructure, data, billing, or production deployments.

## Sources

* [Vercel MCP server docs](https://vercel.com/docs/agent-resources/vercel-mcp)
* [Vercel deploy MCP servers docs](https://vercel.com/docs/mcp/deploy-mcp-servers-to-vercel)
* [Cloudflare Agents MCP docs index](https://developers.cloudflare.com/agents/llms.txt)
* [Cloudflare remote MCP server guide](https://developers.cloudflare.com/agents/model-context-protocol/guides/remote-mcp-server/)
* [AWS Labs MCP servers repo](https://github.com/awslabs/mcp)
* [Azure MCP Server README](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md)
* [Supabase MCP Server docs](https://supabase.com/docs/guides/ai-tools/mcp)
* [Neon MCP Server docs](https://neon.com/docs/ai/neon-mcp-server)
* [GitHub MCP Server repo](https://github.com/github/github-mcp-server)

## Contribute

Open an issue or pull request with:

* Provider name
* Official MCP server or documentation URL
* Endpoint or install command, if public
* Short note on what tools the MCP server exposes
* Whether it is official, beta, preview, or community-maintained
