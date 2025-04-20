import { useState, useEffect } from "react";
import "./App.css";
import { getImage } from "./api";

function App() {
  const [images, setImages] = useState([]);
  const [loadNewImages, setLoadNewImages] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    let isFetching = false;

    const getImages = async () => {
      if (isFetching) return;
      isFetching = true;

      const fetchedImages = [];
      const usedNumbers = new Set();

      while (fetchedImages.length < 15 && !isCancelled) {
        const randomNum = Math.floor(Math.random() * 1000);

        if (usedNumbers.has(randomNum)) continue;
        usedNumbers.add(randomNum);

        try {
          const response = await getImage(randomNum);
          console.log(response);
          fetchedImages.push(response);
        } catch (err) {
          console.log(`Error with ID ${randomNum}:`, err);
          usedNumbers.delete(randomNum);
        }
      }

      if (!isCancelled) {
        setImages(fetchedImages);
        setLoadNewImages(false);
      }

      isFetching = false;
    };

    if (loadNewImages) {
      getImages();
    }

    return () => {
      isCancelled = true;
    };
  }, [loadNewImages]);

  return (
    <main className="main-content">
      <h1>Random Image Feed</h1>

      {loadNewImages ? (
        <p>Fetching Images...</p>
      ) : (
        <div className="images">
          {images.map((img) => (
            <div className="image" key={img.id}>
              <a
                href={`https://picsum.photos/id/${img.id}/${img.width}/${img.height}`}
                target="_blank"
              >
                <img
                  src={img.download_url}
                  alt={`Image ${img.id}`}
                  style={{ width: "300px", height: "200px" }}
                />
              </a>

              <span className="img-author">
                <b>Taken by</b>:{" "}
                <a href={img.url} target="_blank">
                  {img.author}
                </a>
              </span>
            </div>
          ))}
        </div>
      )}

      <button
        className="refresh-btn"
        onClick={() => setLoadNewImages(true)}
        disabled={loadNewImages}
      >
        Refresh
      </button>
    </main>
  );
}

export default App;
