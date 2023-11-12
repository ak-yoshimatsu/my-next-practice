/** @type {import('next').NextConfig} */
const nextConfig = {
  /* <Image>要素はセキュリティ上の理由から、リモートホストから画像を取り込むには
   * あらかじめnext.config.jsで宣言しておく必要がある。
   * 他にも、protocol, port, pathnameなどの制限が可能。
   */
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
      },
    ]
  }
}

module.exports = nextConfig
