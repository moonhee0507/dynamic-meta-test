import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function VerifPage() {
  const params = useParams();
  const { contractAddress, nftId } = params; // metadata.truth.origin.off[0], [1]
  console.log(contractAddress, nftId);

  return (
    <>
      <Helmet>
        <meta property="og:title" content="비스퀘어랩" />
        <meta
          property="og:image"
          content={`https://www.nftruth.io/data/${contractAddress}/${nftId}`}
        />
        <meta property="og:url" content="이 사진은 원본입니다." />
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Dynamic Meta Tag Test 🎅</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <div>
            <p>키보드 이미지:</p>
            <img
              src="https://www.nftruth.io/data/0xBd0876B8cE7116b48540529d64F29118a8013a36/0x471b2b4e1f2f09d83818cf14a335edc1a3d1b6551450c5674998ec425d8ea76b"
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div>
            <p>짱구 이미지:</p>
            <img
              src="https://www.nftruth.io/data/0xBd0876B8cE7116b48540529d64F29118a8013a36/0x69e91bd1e5451a383bcc65de89cc47f753c9405a381a8d5e88d84fd72b28ba59"
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div>
            <p>리액트 로고 이미지:</p>
            <img
              src="https://www.nftruth.io/data/0xBd0876B8cE7116b48540529d64F29118a8013a36/0x4a1af74c08e8d41afd977d3c86e54149c8d26e2461f4c6e6bb6227424f1891ab"
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
