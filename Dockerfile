# Base deps stage with build tools (kept out of final image)
FROM node:18-bullseye-slim AS deps
WORKDIR /app

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends g++ python3 make \
  && rm -rf /var/lib/apt/lists/*

# Install deps with layer caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build stage (uses devDependencies)
FROM deps AS builder
WORKDIR /app
COPY . .
COPY ./config/config.template.ts ./config/index.ts
RUN yarn build

# Production dependencies only
FROM deps AS prod-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Runtime image
FROM node:18-bullseye-slim AS production
WORKDIR /app
ENV NODE_ENV=production

COPY --from=prod-deps --chown=node:node /app/node_modules ./node_modules
COPY --from=builder   --chown=node:node /app/package.json ./
COPY --from=builder   --chown=node:node /app/dist ./dist
COPY --from=builder   --chown=node:node /app/public ./public

USER node
EXPOSE 8002
CMD ["node", "dist/src/app.js"]
