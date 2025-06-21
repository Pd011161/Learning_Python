FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

# --- Production stage ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# คัดไฟล์จำเป็นจาก build มาเท่านั้น
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
# รองรับ next.config.ts
COPY --from=builder /app/next.config.ts ./    
 # (ถ้าต้องการ bundle .env.local เข้า image)
COPY --from=builder /app/.env.local .env.local 

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npx", "next", "start"]
