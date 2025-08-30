import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // 원하는 포트 번호
  },
  build: {
    outDir: 'dist', // 빌드 후 출력될 디렉토리
  },
});
